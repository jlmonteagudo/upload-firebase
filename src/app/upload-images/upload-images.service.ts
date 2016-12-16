import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FileItem } from '../directives/file-item';
import * as firebase from 'firebase';
import * as _ from 'lodash';

@Injectable()
export class UploadImagesService {

  constructor(public af: AngularFire) { }

 uploadImagesToFirebase(files: Array<FileItem[]>) {
   let storageRef = firebase.storage().ref();

  _.each(files, (item:FileItem) => {

    item.isUploading = true;
    let uploadTask: firebase.storage.UploadTask = storageRef.child(`images/${item.file.name}`).put(item.file);
    
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
      (snapshot) => item.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
      (error) => {},
      () => {
        item.url = uploadTask.snapshot.downloadURL;
        item.isUploading = false;
        this.saveImage({ name: item.file.name, url: item.url });
      }
    );
    

  });

 }


 saveImage(image:any) {
   this.af.database.list('/images').push(image);
 }


}

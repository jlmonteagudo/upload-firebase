import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FileItem } from '../directives/file-item';
import * as firebase from 'firebase';
import * as _ from 'lodash';

@Injectable()
export class UploadImagesService {

  private IMAGES_FOLDER: string = 'images';

  constructor(public af: AngularFire) { }

  listLastImages(numberOfImages: number): FirebaseListObservable<any[]>{
    return this.af.database.list(`/${this.IMAGES_FOLDER}`, {
      query: {
        limitToLast: numberOfImages
      }
    });    
  }

  uploadImagesToFirebase(files: Array<FileItem[]>) {
    let storageRef = firebase.storage().ref();

    _.each(files, (item:FileItem) => {

      item.isUploading = true;
      let uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.IMAGES_FOLDER}/${item.file.name}`).put(item.file);
      
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

 private saveImage(image:any) {
   this.af.database.list(`/${this.IMAGES_FOLDER}`).push(image);
 }

}

import { Component } from '@angular/core';
import { FileItem } from '../directives/file-item';
import { UploadImagesService } from '../services/upload-images.service';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent {

  isDropZoneOver:boolean = false;
  isEnabledUpload: boolean = true;
  files: Array<FileItem[]> = [];

  constructor(public uploadImagesService: UploadImagesService) {
  }

  public fileOverDropZone(e:any):void {
    this.isDropZoneOver = e;
  }

  uploadImagesToFirebase() {
    this.isEnabledUpload = false;
    this.uploadImagesService.uploadImagesToFirebase(this.files);
  }

 clearFiles() {
  this.files = [];
  this.isEnabledUpload = true;
 }

}

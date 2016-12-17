import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { UploadImagesService } from '../services/upload-images.service';


@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent {

  private NUMBER_OF_IMAGES: number = 10;
  images: FirebaseListObservable<any[]>;

  constructor(public uploadImagesService: UploadImagesService) { 
    this.images = uploadImagesService.listLastImages(this.NUMBER_OF_IMAGES);
  }

}

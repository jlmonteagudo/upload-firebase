import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent {

  images: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) { 
    this.images = af.database.list('/images', {
      query: {
        limitToLast: 10
      }
    });
  }

}

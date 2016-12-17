import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import * as config from './app.config';
import { AppComponent } from './app.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { ListImagesComponent } from './list-images/list-images.component';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
import { UploadImagesService } from './services/upload-images.service';

const appRoutes: Routes = [
  { path: '', component: ListImagesComponent },
  { path: 'list', component: ListImagesComponent },
  { path: 'upload', component: UploadImagesComponent },
  { path: '**', component: ListImagesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UploadImagesComponent,
    ListImagesComponent,
    NgDropFilesDirective,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(config.firebaseConfig)
  ],
  providers: [ UploadImagesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

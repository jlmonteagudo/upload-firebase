/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UploadImagesService } from './upload-images.service';

describe('UploadImagesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadImagesService]
    });
  });

  it('should ...', inject([UploadImagesService], (service: UploadImagesService) => {
    expect(service).toBeTruthy();
  }));
});

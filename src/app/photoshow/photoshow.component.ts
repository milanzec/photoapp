import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photoshow',
  templateUrl: './photoshow.component.html',
  styleUrls: ['./photoshow.component.css']
})
export class PhotoshowComponent {

  photos = ''

  constructor(private photoservise: PhotosService) {
    this.photoservise.getPhotos().subscribe((response) =>
      this.photos = response.urls.regular
    )
  }

  onClick() {
    this.photoservise.getPhotos().subscribe((response) =>
      this.photos = response.urls.regular
    )
  }

}

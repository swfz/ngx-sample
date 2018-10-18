import { Component, OnInit } from '@angular/core';
import { ApiSampleService, User } from '../../services/api-sample.service';

@Component({
  selector: 'app-to-promise',
  templateUrl: './to-promise.component.html',
  styleUrls: ['./to-promise.component.scss']
})
export class ToPromiseComponent implements OnInit {
  users = this.apiSampleService.users$;
  albums = this.apiSampleService.albums$;
  // photos = this.apiSampleService.photoSource$;
  photos = this.apiSampleService.photos$;

  constructor(private apiSampleService: ApiSampleService) {}

  ngOnInit() {}

  getUserList() {
    this.apiSampleService.fetchUsers();
  }

  viewAlbum(user: User) {
    console.log(user);
    this.apiSampleService.fetchAlbums(user);
    this.albums.subscribe(albums => {
      console.log(albums.length);
      // albums.forEach(album => {
      //   this.apiSampleService.fetchPhotos(album);
      // })
    });
  }
}

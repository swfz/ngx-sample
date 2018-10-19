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

  constructor(private apiSampleService: ApiSampleService) {}

  ngOnInit() {}

  getUserList() {
    this.apiSampleService.fetchUsers();
  }

  viewAlbum(user: User) {
    this.apiSampleService.fetchAlbums(user);
  }
}

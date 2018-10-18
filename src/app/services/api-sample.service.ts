import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { HttpParamsOptions } from '../../../node_modules/@angular/common/http/src/params';
import {scan} from 'rxjs/operators';

export class User {
  id: number;
  name: string;
  username: string;
}
export class Album {
  id: number;
  userId: number;
  title: string;
  photos: Photo[];
}
export class Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiSampleService {
  private _users$ = new BehaviorSubject<User[]>([]);
  private _albums$ = new BehaviorSubject<Album[]>([]);
  private _photos$ = new BehaviorSubject<Photo[]>([]);

  private _photoSource$ = new BehaviorSubject({});

  constructor(private http: HttpClient) {
    // this.photos$().pipe(
    //   scan((acc, photo) => {
    //     console.log(photo);
    //     console.log(acc);
    //   })
    // );
  }

  get users$() {
    return this._users$.asObservable();
  }

  get albums$() {
    return this._albums$.asObservable();
  }

  get photos$() {
    return this._photos$.asObservable();
  }

  get photoSource$() {
    return this._photoSource$.asObservable();
  }

  fetchUsers() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    this.http.get<User[]>(apiUrl).subscribe(users => {
      console.log(users);
      this._users$.next(users);
    });
  }

  fetchAlbums(user: User) {
    const apiUrl = 'https://jsonplaceholder.typicode.com/albums';

    const condition = { userId: user.id.toString() };
    this.http
      .get<Album[]>(apiUrl, {
        params: new HttpParams(<HttpParamsOptions>{ fromObject: condition })
      })
      .subscribe(albums => {
        this._albums$.next(albums);
      });
  }

  fetchPhotos(album: Album) {
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

    const condition = { albumId: album.id.toString() };
    this.http
      .get<Photo[]>(apiUrl, {
        params: new HttpParams(<HttpParamsOptions>{ fromObject: condition })
      })
      .subscribe(photos => {
        const albums = this._albums$.getValue();
        albums.filter(_ => _.id === album.id)[0].photos = photos;
        this._albums$.next(albums);
        // this._photos$.next(photos);
      });
  }
}

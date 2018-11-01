import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpParamsOptions } from '../../../node_modules/@angular/common/http/src/params';
import { concatMap, scan, tap } from 'rxjs/operators';

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

  constructor(private http: HttpClient) {}

  get users$() {
    return this._users$.asObservable();
  }

  get albums$() {
    return this._albums$.asObservable();
  }

  fetchUsers() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    this.http.get<User[]>(apiUrl).subscribe(users => {
      this._users$.next(users);
    });
  }

  async fetchAlbums(user: User) {
    const apiUrl = 'https://jsonplaceholder.typicode.com/albums';

    const condition = { userId: user.id.toString() };
    const albums = await this.http
      .get<Album[]>(apiUrl, {
        params: new HttpParams(<HttpParamsOptions>{ fromObject: condition })
      })
      .toPromise();

    this.fetchPhotos(albums);
  }

  async fetchPhotos(albums: Album[]) {
    const albumsWithPhoto = await Promise.all(
      albums.map(_ => this.appendPhotos(_))
    );
    this._albums$.next(<Album[]>albumsWithPhoto);
  }

  private appendPhotos(album: Album) {
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos';
    const condition = { albumId: album.id.toString() };
    return this.http
      .get<Photo[]>(apiUrl, {
        params: new HttpParams(<HttpParamsOptions>{ fromObject: condition })
      })
      .pipe(
        concatMap(photos => {
          album.photos = photos;
          return of(album);
        })
      )
      .toPromise();
  }
}

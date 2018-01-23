import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, shareReplay } from 'rxjs/operators';

export interface IHero {
  id: number;
  name: string;
}

@Injectable()
export class CacheService {
  public options: any;
  private _heroes: Observable<IHero>;
  private _hero: any;

  constructor(private http: HttpClient) {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
      // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      // 'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Requested-With,X-Requested-By,X-Api-Key'
    };
    this.options = {
      headers: headers
    };

    this._hero = {};
  }

  getHeroes() {
    // let apiUrl = 'http://192.168.30.14:3000/heroes';
    // const apiUrl =
    // 'https://dhzjel6242.execute-api.ap-southeast-1.amazonaws.com/Prod/helloworld';

    const apiUrl = 'http://192.168.30.14:8001/heroes';
    if (!this._heroes) {
      this._heroes = this.http
        .get(apiUrl, this.options)
        .pipe(shareReplay(), catchError(this.handleError));
    }

    return this._heroes;
  }

  getHero(id: number): Observable<any> {
    const apiUrl = 'http://192.168.30.14:8001/heroes/' + id;

    if (!this._hero[id]) {
      this._hero[id] = this.http
        .get(apiUrl, this.options)
        .pipe(shareReplay(), catchError(this.handleError));
    }

    return this._hero[id];
  }

  handleError(error: any) {
    console.log(error);
    const errMsg = error.message || 'Server Error';
    return Observable.throw(errMsg);
  }
}

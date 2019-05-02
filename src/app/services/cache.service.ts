import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, shareReplay } from 'rxjs/operators';
import { HttpParamsOptions } from '@angular/common/http/src/params';
import { HttpParams } from '@angular/common/http';

export interface IHero {
  id: number;
  name: string;
}

@Injectable()
export class CacheService {
  public options: any;
  private _heroes: Observable<any>;
  private _hero: any;
  private _users: Observable<any>;

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

    const apiUrl = 'http://192.168.30.14:3000/heroes';
    if (!this._heroes) {
      this._heroes = this.http.get(apiUrl, this.options).pipe(
        shareReplay(),
        catchError(this.handleError)
      );
    }

    return this._heroes;
  }

  getHero(id: number): Observable<any> {
    const apiUrl = 'http://192.168.30.14:3000/heroes/' + id;

    if (!this._hero[id]) {
      this._hero[id] = this.http.get(apiUrl, this.options).pipe(
        shareReplay(),
        catchError(this.handleError)
      );
    }

    return this._hero[id];
  }

  getUsers() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    if (!this._users) {
      this._users = this.http.get(apiUrl).pipe(
        shareReplay(),
        catchError(this.handleError)
      );
    }

    return this._users;
  }

  getUserWithParams(condition: any): Observable<any> {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    return (this._users = this.http
      .get(apiUrl, this.formatGetParams(condition))
      .pipe(
        shareReplay(),
        catchError(this.handleError)
      ));
  }

  handleError(error: any) {
    console.log(error);
    const errMsg = error.message || 'Server Error';
    return observableThrowError(errMsg);
  }

  private formatGetParams(conditions: any) {
    const paramsOptions = <HttpParamsOptions>{ fromObject: conditions };
    const params = new HttpParams(paramsOptions);

    return { params: params };
  }
}

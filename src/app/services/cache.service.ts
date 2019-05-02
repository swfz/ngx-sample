import {
  throwError as observableThrowError,
  Observable,
  BehaviorSubject
} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, shareReplay } from 'rxjs/operators';
import { HttpParamsOptions } from '@angular/common/http/src/params';
import { HttpParams } from '@angular/common/http';

export class Hero {
  id: number;
  name: string;
}

@Injectable()
export class CacheService {
  get heroes$() {
    return this._heroes$.asObservable();
  }
  get hero$() {
    return this._hero$.asObservable();
  }

  private _heroes$ = new BehaviorSubject<Hero[]>([]);
  private _hero$ = new BehaviorSubject<Hero>(null);
  public options: any;

  private _cachedHero: { [key: number]: Hero };
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

    this._cachedHero = {};
  }

  getHeroes(): void {
    const apiUrl = 'http://192.168.30.14:4200/api/heroes';

    const isHeroes = (heroes: Hero[] | unknown): heroes is Hero[] =>
      Array.isArray(heroes);

    if (this._heroes$.getValue().length === 0) {
      this.http.get<Hero[]>(apiUrl, this.options).subscribe(_ => {
        if (isHeroes(_)) {
          this._heroes$.next(_);
        }
      });
    }
  }

  getHero(id: number): void {
    const apiUrl = 'http://192.168.30.14:4200/api/heroes/' + id;

    const isHero = (hero: Hero | unknown): hero is Hero => hero !== undefined;
    const isCached = !!this._cachedHero[id];

    if (isCached) {
      this._hero$.next(this._cachedHero[id]);
      return;
    }

    this.http.get<Hero>(apiUrl, this.options).subscribe(_ => {
      if (isHero(_)) {
        this._hero$.next(_);
        this._cachedHero[_.id] = _;
      }
    });
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
    // console.log(error);
    const errMsg = error.message || 'Server Error';
    return observableThrowError(errMsg);
  }

  private formatGetParams(conditions: any) {
    const paramsOptions = <HttpParamsOptions>{ fromObject: conditions };
    const params = new HttpParams(paramsOptions);

    return { params: params };
  }
}

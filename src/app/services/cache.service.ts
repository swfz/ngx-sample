import { Injectable } from '@angular/core';
import {Observable,ReplaySubject} from 'rxjs';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class CacheService {

  public options: RequestOptions;
  private _heroes: any;

  constructor(
    private http: Http
  ) {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    this.options = new RequestOptions({
      headers: headers
    });
  }

  getHeroes() {
    let apiUrl = 'http://192.168.30.14:3000/heroes';

    if(!this._heroes){
      this._heroes = this.http.get(apiUrl,this.options)
        .publishReplay(2).refCount()
        .map(this.extractData)
        .catch(this.handleError)
    }

    return this._heroes;
  }

  extractData(res: Response) {
    if (res.status < 200 || res.status > 300) {
      console.log("extract data");
      throw new Error(`Bad Response Status: ${res.status}`)
    }
    return res.json();
  }

  handleError(error: any){
    console.log("handle error");
    console.log(error);
    let errMsg = error.message || 'Server Error';
    return Observable.throw(errMsg);
  }
}

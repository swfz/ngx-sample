import { Injectable } from '@angular/core';
import {Observable,Subject,ReplaySubject} from 'rxjs';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

export interface IHero {
  id: number,
  name: string
}

@Injectable()
export class CacheService {

  public options: RequestOptions;
  private _heroes: Observable<IHero>;

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

  getHeroes(){
    let apiUrl = 'http://192.168.30.14:3000/heroes';

    if(!this._heroes){
      this._heroes = this.http.get(apiUrl,this.options)
        .map(this.extractData)
        .shareReplay()
        .catch(this.handleError)
    }

    return this._heroes;
  }

  extractData(res: Response) {
    if (res.status < 200 || res.status > 300) {
      throw new Error(`Bad Response Status: ${res.status}`)
    }
    return res.json();
  }

  handleError(error: any){
    console.log(error);
    let errMsg = error.message || 'Server Error';
    return Observable.throw(errMsg);
  }
}

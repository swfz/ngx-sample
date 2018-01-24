import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap, map, switchMap, concatMap, takeWhile } from 'rxjs/operators';

@Injectable()
export class PollingService {
  private httpResponses: any;
  private job: any;
  public log: string;

  constructor() {}

  private initialize() {
    this.log = '';

    this.job = {
      id: '6e1bbc60-a142-4eea-8170-52128b7a3e79'
    };
    this.httpResponses = [
      { status: 'progress' },
      { status: 'progress' },
      { status: 'progress' },
      { url: 'http://example.com/aaa.csv' }
    ];
  }

  download() {
    this.initialize();
    return this.kickJob().pipe(concatMap(job => this.polling(job.id)));
  }

  private kickJob(): Observable<any> {
    // 本来はサーバへ通信
    return Observable.of(this.job);
  }

  private getStatus(id): Observable<any> {
    // 本来はサーバへ通信
    return Observable.of(this.httpResponses.shift());
  }

  private polling(id: string): Observable<any> {
    return Observable.interval(2000).pipe(
      concatMap(() => this.getStatus(id)),
      concatMap(this.convertResponse),
      takeWhile(this.inProgress),
      tap(this.downloadFile),
      concatMap(this.throwStatus)
    );
  }

  private convertResponse(res): Observable<any> {
    if (res.url) {
      return Observable.of(Object.assign(res, { status: 'progress' }), {
        status: 'done'
      });
    }
    return Observable.of(res);
  }

  private inProgress(res) {
    return res.status === 'progress';
  }

  private throwStatus(res): Observable<any> {
    console.log(res);
    return Observable.of(res.status);
  }

  private downloadFile(res) {
    if (res['url']) {
      // location.href = res.url;
      console.log('download now!');
    }
  }

  private logging(log: string) {
    this.log = `${this.log}\n${log}`;
    console.log(log);
  }
}

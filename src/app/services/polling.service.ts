import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, switchMap, concatMap, takeWhile } from 'rxjs/operators';

@Injectable()
export class PollingService {
  private httpResponses: any;
  public log: string;
  constructor() {}

  private initialize() {
    this.log = '';
    this.httpResponses = [
      { status: 'progress' },
      { status: 'progress' },
      { status: 'progress' },
      { url: 'http://example.com/aaa.csv' }
    ];
  }

  private getFileStatus(): Observable<any> {
    return Observable.of(this.httpResponses.shift());
  }

  private convertResponse(res) {
    if (res.url) {
      return Observable.of(Object.assign(res, { status: 'progress' }), {
        status: 'done'
      });
    }
    return Observable.of(res);
  }

  private isProgress(res) {
    return res.status === 'progress';
  }

  getFile() {
    this.initialize();
    Observable.interval(1000)
      .pipe(
        concatMap(() => this.getFileStatus()),
        concatMap(this.convertResponse),
        takeWhile(this.isProgress)
      )
      .subscribe(
        res => {
          this.logging('waiting...');
          this.logging(JSON.stringify(res));
          if (res['url']) {
            this.downloadFile(res.url);
          }
        },
        err => {
          console.log(err);
        },
        () => {
          this.logging('complete');
        }
      );
  }

  private downloadFile(url) {
    this.logging('download now');
    this.logging(url);
  }

  private logging(log: string) {
    this.log = `${this.log}\n${log}`;
    console.log(log);
  }
}

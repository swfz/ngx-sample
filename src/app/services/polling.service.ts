import { interval as observableInterval, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap, map, concatMap, takeWhile } from 'rxjs/operators';

interface IStatusResponse {
  status: 'progress' | 'done';
}
interface IUrlResponse {
  url: string;
}
interface IStatus {
  status: 'progress' | 'done';
  url?: string;
}
@Injectable({
  providedIn: 'root'
})
export class PollingService {
  private httpResponses: any;
  private job: any;

  constructor() {}

  private initialize() {
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
    return of(this.job);
  }

  private getStatus(id: string): Observable<IStatus> {
    // 本来はサーバへ通信
    return of(this.httpResponses.shift());
  }

  private polling(id: string): Observable<string> {
    return observableInterval(2000).pipe(
      concatMap(() => this.getStatus(id)),
      concatMap(this.convertResponse),
      tap(this.downloadFile),
      takeWhile(this.inProgress),
      map((res: IStatus) => res.status)
    );
  }

  private convertResponse(
    res: IStatusResponse | IUrlResponse
  ): Observable<IStatus> {
    const isUrlResponse = (r: any): r is IUrlResponse => {
      return r.url !== undefined;
    };

    // key: urlが存在する = DL準備ができている
    if (isUrlResponse(res)) {
      return of(<IStatus>{
        url: res.url,
        status: 'done'
      });
    } else {
      return of(res);
    }
  }

  private inProgress(res: IStatus): boolean {
    console.log(res);
    const isStatusResponse = (r: any): r is IStatusResponse => {
      return r.url === undefined;
    };

    return isStatusResponse(res) ? res.status === 'progress' : false;
  }

  private downloadFile(res: IStatus): void {
    const isUrlResponse = (r: any): r is IUrlResponse => {
      return r.url !== undefined;
    };

    if (isUrlResponse(res)) {
      // location.href = res.url;
      console.log('download now!');
    }
  }
}

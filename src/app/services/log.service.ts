import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Log {
  level?: string;
  message?: string | null | undefined;
  key?: string;
  data?: unknown;
}

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private messageSource = new Subject<Log>();
  messages$ = this.messageSource.asObservable();

  constructor() {
    this.messageSource.next({});
  }

  add(message: Log): void {
    this.messageSource.next(message);
  }
}

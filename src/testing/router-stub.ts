import {convertToParamMap, ParamMap, Params, RouterEvent} from '@angular/router';
import { ReplaySubject } from 'rxjs';
import {Observable} from "rxjs/Rx";

export class RouterStub {
  private subject = new Observable<Event>();

  constructor() {
    this.setEvent();
  }

  readonly event = this.subject.asObservable();

  setEvent() {
    this.subject.next(<RouterEvent>{id: 1, url: 'hoge'});
  };
}

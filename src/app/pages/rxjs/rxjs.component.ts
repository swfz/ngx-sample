import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {Subject, Observable} from "rxjs";
import {bufferTime, distinctUntilChanged, filter, last, pairwise, withLatestFrom} from 'rxjs/operators';
import {interval} from 'rxjs/observable/interval';

export interface IEvent {
  type: string;
}

export interface IInputText {
  value: string;
}
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  public aaa: Observable<number> = new Subject;

  private events$: Subject<IEvent>;
  private inputTexts$: Subject<IInputText>;
  private interval$: Observable<any>;
  constructor(
  ) { }

  ngOnInit(){
    this.aaa.subscribe(result => {
      console.log('observer recieved' + result);
    });
    this.events$ = new Subject<IEvent>();

    this.events$.pipe(
      distinctUntilChanged((a: IEvent, b: IEvent) => a.type === b.type),
      bufferTime(5000),
      ).subscribe(events => {
        // console.log(events);
      });

    this.inputTexts$ = new Subject<IInputText>();

    this.interval$ = interval(3000);

    this.interval$.pipe(
      withLatestFrom(this.inputTexts$),
      pairwise(),
      filter(this.lastChanged),
      distinctUntilChanged(this.distinct)
    ).subscribe(p => {
      console.log(p);
    });
  }

  lastChanged(v){
    // 落ち着いたかどうかをチェック
    // このフィルタを通る = 入力がintervalの分だけないということ
    return v[0][1].value == v[1][1].value;
  }

  // ずっと同じものが流れないようにする
  distinct(a, b) {
    return a[1][1].value === b[1][1].value;
  }

  @ViewChild('input') text;

  onKeyup(){
    console.log(this.text.nativeElement.value);
  }

  from(){
    Observable.from([1,2,3])
      .subscribe(
        value => console.log(`value: ${value}`),
        error => console.log(`error ${error}`),
        () =>  console.log('completed')
      );
  }

  range(){
    Observable.range(0, 10)
      .subscribe(
        value => console.log(`value: ${value}`),
        error => console.log(`error ${error}`),
        () =>  console.log('completed')
      )
  }

  defer(){
    Observable.defer(
      () => {
        this.sleep(5000);
        console.log("defer called");
        return Observable.from('1');
      }
    ).subscribe(
        value => console.log(`value: ${value}`),
        error => console.log(`error ${error}`),
        () =>  console.log('completed')
      );
  }

  interval(){
    Observable.interval(3000)
      .subscribe(
        value => console.log(`value: ${value}`),
        error => console.log(`error ${error}`),
        () =>  console.log('completed')
      );
  }

  clickEvent(type) {
    this.events$.next({type: type});
  }

  onInputEvent(e) {
    // console.log(e);
    // console.log(e.target.value);
    this.inputTexts$.next({value: e.target.value});
  }



  private sleep(ms: number){
    setTimeout(console.log('timeout'),ms);
    return
  }
}

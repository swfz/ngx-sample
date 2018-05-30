import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {Subject, Observable} from "rxjs";
import {bufferTime, distinctUntilChanged, filter, pairwise} from "rxjs/operators";

export interface IEvent {
  type: string;
}
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  public aaa: Observable<number> = new Subject;

  private events$: Subject<IEvent>;
  private inputTexts$: Subject<string>;
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
        console.log(events);
      });

    this.inputTexts$ = new Subject<string>();

    this.inputTexts$.pipe(
      pairwise(),
      // filter(p => p[0] === p[1])
    ).subscribe(p => {
      console.log(p);
    });
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

  keyUpEvent(e) {
    // console.log(e);
    // console.log(e.target.value);
    this.inputTexts$.next(e.target.value);
  }



  private sleep(ms: number){
    setTimeout(console.log('timeout'),ms);
    return
  }
}

import {
  defer as observableDefer,
  range as observableRange,
  from as observableFrom,
  Subject,
  Observable,
  interval
} from 'rxjs';
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  QueryList
} from '@angular/core';
import {
  bufferTime,
  distinctUntilChanged,
  filter,
  last,
  pairwise,
  withLatestFrom
} from 'rxjs/operators';

export interface IEvent {
  type: string;
}

type TextInputPair = [number, { value: string }];
type TextInputTuple = [TextInputPair, TextInputPair];

export interface IInputText {
  value: string;
}
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  public aaa!: Observable<number>;

  @ViewChild('input')
  text!: HTMLInputElement;

  private events$!: Subject<IEvent>;
  private inputTexts$!: Subject<IInputText>;
  private interval$!: Observable<any>;

  constructor() {}

  ngOnInit() {
    this.aaa = new Subject();
    this.aaa.subscribe(result => {
      console.log('observer recieved' + result);
    });
    this.events$ = new Subject<IEvent>();

    this.events$
      .pipe(
        distinctUntilChanged((a: IEvent, b: IEvent) => a.type === b.type),
        bufferTime(5000)
      )
      .subscribe(events => {
        // console.log(events);
      });

    this.inputTexts$ = new Subject<IInputText>();

    this.interval$ = interval(3000);

    this.interval$
      .pipe(
        withLatestFrom(this.inputTexts$),
        pairwise(),
        filter(this.silenceValue),
        distinctUntilChanged(this.distinct)
      )
      .subscribe(p => {
        console.log(p);
      });
  }

  silenceValue(v: TextInputTuple): boolean {
    // 落ち着いたかどうかをチェック
    // このフィルタを通る = 入力がintervalの分だけないということ
    return v[0][1].value === v[1][1].value;
  }

  // ずっと同じものが流れないようにする
  distinct(a: TextInputTuple, b: TextInputTuple): boolean {
    return a[1][1].value === b[1][1].value;
  }

  from() {
    observableFrom([1, 2, 3]).subscribe(
      value => console.log(`value: ${value}`),
      error => console.log(`error ${error}`),
      () => console.log('completed')
    );
  }

  range() {
    observableRange(0, 10).subscribe(
      value => console.log(`value: ${value}`),
      error => console.log(`error ${error}`),
      () => console.log('completed')
    );
  }

  defer() {
    observableDefer(() => {
      this.sleep(5000);
      console.log('defer called');
      return observableFrom('1');
    }).subscribe(
      value => console.log(`value: ${value}`),
      error => console.log(`error ${error}`),
      () => console.log('completed')
    );
  }

  interval() {
    interval(3000).subscribe(
      value => console.log(`value: ${value}`),
      error => console.log(`error ${error}`),
      () => console.log('completed')
    );
  }

  clickEvent(type: 'hoge' | 'fuga') {
    this.events$.next({ type: type });
  }

  onInputEvent(e: KeyboardEvent) {
    if (e.target) {
      const input: HTMLInputElement = e.target as HTMLInputElement; // やむを得ずキャストしている
      this.inputTexts$.next({ value: input.value });
    }
  }

  private sleep(ms: number) {
    // setTimeout(console.log('timeout'), ms);
    return;
  }
}

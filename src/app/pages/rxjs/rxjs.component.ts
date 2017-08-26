import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {Subject, Observable} from "rxjs";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  public inputText: any;
  public aaa: Observable<number> = new Subject;
  constructor(

  ) { }

  ngOnInit(){
    this.aaa.subscribe(result => {
      console.log('observer recieved' + result);
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

  private sleep(ms: number){
    setTimeout(console.log('timeout'),ms);
    return
  }
}

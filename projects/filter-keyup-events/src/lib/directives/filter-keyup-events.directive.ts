import { AfterViewInit, Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { filter, pairwise, withLatestFrom, map, distinctUntilChanged } from 'rxjs/operators';

export interface InputText {
  value: string;
}
export type IndexedInputText = [number, InputText];
export type TwoIndexAndText = [IndexedInputText, IndexedInputText];
export type BeforeAfterInputText = [string, string];

@Directive({
  selector: '[appFilterKeyupEvents]'
})
export class FilterKeyupEventsDirective implements AfterViewInit{
  private inputTexts$!: Subject<InputText>;
  private interval$!: Observable<number>;

  @Input()
  intervalMs?: number;

  @Output() filteredText: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngAfterViewInit() {
    this.interval$ =  interval(this.intervalMs);
    this.inputTexts$ = new Subject<InputText>();

    this.interval$.pipe(
      withLatestFrom(this.inputTexts$),
      pairwise(),
      map(this.deleteIndex),
      filter(this.sillenceValue),
      distinctUntilChanged(this.distinct)
    ).subscribe(p => {
      this.filteredText.emit(p[0]);
    });
  }

  private deleteIndex(v: TwoIndexAndText): BeforeAfterInputText {
    return [v[0][1].value, v[1][1].value];
  }

  private sillenceValue(v: BeforeAfterInputText) {
    return v[0] === v[1];
  }

  private distinct(a: BeforeAfterInputText, b: BeforeAfterInputText) {
    return a[1] === b[1];
  }

  @HostListener('keyup', ['$event.target.value'])
  onKeyUp(value: string) {

    this.inputTexts$.next({value: value});
  }
}

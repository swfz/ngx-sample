import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_SELECTOR_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomSelectorComponent),
  multi: true
};

@Component({
  selector: 'custom-selector',
  templateUrl: './custom-selector.component.html',
  styleUrls: ['./custom-selector.component.scss'],
  providers: [CUSTOM_SELECTOR_CONTROL_VALUE_ACCESSOR]
})
export class CustomSelectorComponent implements OnInit, ControlValueAccessor {
  constructor() {}

  @Input()
  max: number = 5;

  private _onChange: any = Function.prototype;
  private _onTouched: any = Function.prototype;

  public ranges: any = [];
  public value: number;

  ngOnInit() {
    this.ranges = Array.from(Array(this.max).keys());
  }
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: (_: any) => {}): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }

  setRate(rate: number) {
    this.writeValue(rate);
    this._onChange(this.value);
    this._onTouched();
  }
}

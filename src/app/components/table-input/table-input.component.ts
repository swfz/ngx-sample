import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

type RowValue = boolean[];
type CheckValues = RowValue[];

export const TABLE_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  // tslint:disable-next-line:no-use-before-declare
  useExisting: forwardRef(() => TableInputComponent),
  multi: true
};
@Component({
  selector: 'app-table-input',
  templateUrl: './table-input.component.html',
  styleUrls: ['./table-input.component.scss'],
  providers: [TABLE_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class TableInputComponent implements OnInit, ControlValueAccessor {
  private _onChange: any = Function.prototype;
  private _onTouched: any = Function.prototype;

  public value!: any;
  public _value!: any;

  @Input()
  rows!: number;
  @Input()
  cols!: number;
  @Input()
  rowLabels!: string[];
  @Input()
  colLabels!: string[];

  public rowRange!: number[];
  public colRange!: number[];

  constructor() {}

  ngOnInit() {
    this._value = [];
    this.rowRange = Array.from(Array(this.rows).keys());
    this.colRange = Array.from(Array(this.cols).keys());
    // this.rowLabels = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    // this.colLabels = Array.from(Array(24).keys()).map(_ => _.toString());
    this.rowRange.forEach(row => {
      this.colRange.forEach(col => {
        if (!this._value[row]) {
          this._value[row] = [];
        }
        this._value[row][col] = false;
      });
    });
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

  check(r: number, c: number) {
    this._value[r][c] = !this._value[r][c];

    this.writeValue(this._value);
    this._onChange(this._value);
  }

  colCheck(c: number) {
    const isAllColChecked = this._value.every((r: boolean[]) => r[c]);
    this._value.map((row: boolean[]) => {
      row[c] = !isAllColChecked;
    });

    this.writeValue(this._value);
    this._onChange(this._value);
  }

  rowCheck(r: number) {
    const isAllRowChecked = this._value[r].every((c: boolean) => c === true);
    this._value[r] = this._value[r].map((_: boolean) => !isAllRowChecked);

    this.writeValue(this._value);
    this._onChange(this._value);
  }

  allCheck() {
    const isAllChecked = this._value.every((r: boolean[]) => {
      return r.every(c => c === true);
    });
    this.rowRange.forEach(row => {
      this.colRange.forEach(col => {
        this._value[row][col] = !isAllChecked;
      });
    });

    this.writeValue(this._value);
    this._onChange(this._value);
  }
}

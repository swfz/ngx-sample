import { Component, OnInit } from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
@Component({
  selector: 'tile-selector',
  templateUrl: './tile-selector.component.html',
  styleUrls: ['./tile-selector.component.scss']
})
export class TileSelectorComponent implements OnInit , ControlValueAccessor{

  constructor() { }

  ngOnInit() {
  }

  writeValue(value: any): void {

  }

  registerOnChange(fn: (_: any) => {} ): void {
  }

  registerOnTouched(fn: () => {} ): void {

  }



}

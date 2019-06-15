import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import * as _ from 'lodash';

@Pipe({
  name: 'numberInput'
})
export class NumberInputPipe implements PipeTransform {
  transform(value: string, digits?: string): string {
    const parsedValue: number = parseInt(value, 10);
    if (isNaN(parsedValue)) {
      return value;
    }
    if (digits) {
      return new DecimalPipe('en').transform(value, digits) || value;
    } else {
      return new DecimalPipe('en').transform(value, '1.0-0') || value;
    }
  }

  parse(value: string): string {
    return value.replace(/,/g, '');
  }
}

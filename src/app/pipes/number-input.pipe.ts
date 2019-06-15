import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import * as _ from 'lodash';

@Pipe({
  name: 'numberInput'
})
export class NumberInputPipe implements PipeTransform {
  transform(value: string | number, digits?: string): string {
    if (_.isNumber(value)) {
      if (digits) {
        return new DecimalPipe('en').transform(value, digits) || '';
      } else {
        return new DecimalPipe('en').transform(value, '1.0-0') || '';
      }
    }
    return '';
  }

  parse(value: string): string {
    return value.replace(/,/g, '');
  }
}

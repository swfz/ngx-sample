import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import * as _ from 'lodash';

@Pipe({
  name: 'numberInput'
})
export class NumberInputPipe implements PipeTransform {
  transform(value: string, digits?: string): string {
    if (_.isNotNullOrUndefined(digits)) {
      return new DecimalPipe('en').transform(value, digits);
    } else {
      return new DecimalPipe('en').transform(value, '1.0-0');
    }
  }

  parse(value: string): string {
    return value.replace(/,/g, '');
  }
}

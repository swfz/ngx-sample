import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'numberInput'
})
export class NumberInputPipe implements PipeTransform {
  transform(value: string, digits?: string): string | null {
    if (digits) {
      return new DecimalPipe('en').transform(value, digits);
    } else {
      return new DecimalPipe('en').transform(value, '1.0-0');
    }
  }

  parse(value: string): string {
    return value.replace(/,/g, '');
  }
}

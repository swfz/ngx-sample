import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'numberInput'
})
export class NumberInputPipe implements PipeTransform {
  transform(value: any, digits?: string): string {
    return new DecimalPipe('en').transform(value, digits);
  }

  parse(value: string): string {
    return value.replace(/,/g, '');
  }
}

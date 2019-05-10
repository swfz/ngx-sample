import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appNameValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true }
  ]
})
export class NameValidatorDirective implements Validator {
  @Input()
  banName: string;

  constructor() {
    this.banName = ''
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.banName !== control.value ? null : {banName: {value: control.value}};
  }
}

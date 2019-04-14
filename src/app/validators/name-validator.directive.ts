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

  constructor() {}

  validate(control: AbstractControl): { [key: string]: any } {
    return this.banName === control.value
      ? { banName: { value: control.value } }
      : null;
  }
}

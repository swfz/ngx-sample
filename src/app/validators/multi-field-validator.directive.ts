import { Directive, Input, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector:
    '[appMultiFieldValidator][formControlName],[appMultiFieldValidator][formControl]',
  // selector: '[multiFieldValidator][formControlName],[multiFieldValidator][formControl],[multiFieldValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MultiFieldValidatorDirective,
      multi: true
    }
  ]
})
export class MultiFieldValidatorDirective implements Validator {
  constructor(
    @Attribute('multiFieldValidator') public multiFieldValidator: any
  ) {}
  validate(control: AbstractControl): { [key: string]: any } | null {
    const typeControl = control.root.get(this.multiFieldValidator);
    if (typeControl === null) {
      return null;
    }
    switch (typeControl.value) {
      case 'A':
        return control.value < 300
          ? { price: { value: 'price is grater than 300!' } }
          : null;
      case 'B':
        return control.value < 500
          ? { price: { value: 'price is grater than 500!' } }
          : null;
      case 'C':
        return control.value < 1000
          ? { price: { value: 'price is grater than 1000!' } }
          : null;
    }
    return null;
  }
}

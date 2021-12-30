/* eslint-disable @angular-eslint/directive-selector */
import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[maxValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MaxValidatorDirective, multi: true }],
})
export class MaxValidatorDirective implements Validator {
  @Input('maxValidator') max: number;

  validate(c: FormControl) {
    let v: number = +c.value;

    if (v > +this.max) {
      return { maxValidator: true, requiredValue: this.max };
    }

    return null;
  }
}

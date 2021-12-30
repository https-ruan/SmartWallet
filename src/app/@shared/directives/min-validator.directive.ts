/* eslint-disable @angular-eslint/directive-selector */
import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[minValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinValidatorDirective, multi: true }],
})
export class MinValidatorDirective implements Validator {
  @Input('minValidator') min: number;

  validate(c: FormControl) {
    let v: number = +c.value;

    if (v < +this.min) {
      return { minValidator: true, requiredValue: this.min };
    }

    return null;
  }
}

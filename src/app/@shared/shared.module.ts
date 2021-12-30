import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { MaxValidatorDirective } from './directives/max-validator.directive';
import { MinValidatorDirective } from './directives/min-validator.directive';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, TranslateModule, CommonModule],
  declarations: [LoaderComponent, MaxValidatorDirective, MinValidatorDirective],
  exports: [LoaderComponent, MaxValidatorDirective, MinValidatorDirective],
})
export class SharedModule {}

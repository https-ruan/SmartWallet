import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentosComponent } from './lancamentos-component/lancamentos.component';
import { LancamentosRoutingModule } from './lancamentos-routing.module';

@NgModule({
  declarations: [LancamentosComponent],
  imports: [CommonModule, LancamentosRoutingModule],
  exports: [LancamentosComponent],
})
export class LancamentosModule {}

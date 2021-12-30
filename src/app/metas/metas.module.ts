import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetasComponent } from './metas-compoent/metas.component';
import { MetasRoutingModule } from './metas-routing.module';

@NgModule({
  declarations: [MetasComponent],
  imports: [CommonModule, MetasRoutingModule],
  exports: [MetasComponent],
})
export class MetasModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { LancamentosComponent } from './lancamentos-component/lancamentos.component';

const routes: Routes = [{ path: '', component: LancamentosComponent, data: { title: marker('Metas') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LancamentosRoutingModule {}

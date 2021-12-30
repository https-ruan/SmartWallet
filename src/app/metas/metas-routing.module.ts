import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { MetasComponent } from './metas-compoent/metas.component';

const routes: Routes = [{ path: '', component: MetasComponent, data: { title: marker('Metas') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetasRoutingModule {}

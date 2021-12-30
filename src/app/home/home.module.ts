import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@app/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxMaskModule } from 'ngx-mask';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './home-component/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    HomeRoutingModule,
    CarouselModule,
    NgxMaskModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}

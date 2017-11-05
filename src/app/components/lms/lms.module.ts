import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LmsRoutingModule } from './lms-routing.module';

import { LmsComponent } from './lms/lms.component';


@NgModule({
  imports: [
    CommonModule,
    LmsRoutingModule
  ],
  declarations: [LmsComponent]
})
export class LmsModule { }

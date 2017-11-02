import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeoAuditToolComponent } from './seo-audit-tool/seo-audit-tool.component';
import { SeoAuditToolRoutingModule } from './seo-audit-tool-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SeoAuditToolRoutingModule,
    SharedModule
  ],
  declarations: [SeoAuditToolComponent]
})
export class SeoAuditToolModule { }

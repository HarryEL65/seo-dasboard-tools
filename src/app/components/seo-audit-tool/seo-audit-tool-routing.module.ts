import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SeoAuditToolComponent } from './seo-audit-tool/seo-audit-tool.component';


const SeoAuditToolRoutes: Routes = [
  { path: '', component: SeoAuditToolComponent, children: [
    // { path: 'dashboard-level', component: SeoAuditToolComponent }
    ]
  },
  // { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forChild(SeoAuditToolRoutes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class SeoAuditToolRoutingModule { }

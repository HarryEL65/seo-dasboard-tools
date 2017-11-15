import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LmsComponent } from './lms/lms.component';

const LmsRoutes: Routes = [
  { path: '', component: LmsComponent, children: [
    // { path: 'dashboard-level', component: SeoAuditToolComponent }
    ]
  },
  // { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forChild(LmsRoutes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class LmsRoutingModule { }

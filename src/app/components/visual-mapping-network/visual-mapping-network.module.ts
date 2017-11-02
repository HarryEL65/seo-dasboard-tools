import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { VisualMappingNetworkComponent } from './visual-mapping-network/visual-mapping-network.component';

const VisualMappingNetworkRoutes: Routes = [
  { path: 'visual-mapping', component: VisualMappingNetworkComponent, children: [
    // { path: 'dashboard-level', component: SeoAuditToolComponent }
    ]
  },
  // { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forChild(VisualMappingNetworkRoutes),
  ],
  declarations: [VisualMappingNetworkComponent]
})
export class VisualMappingNetworkModule { }

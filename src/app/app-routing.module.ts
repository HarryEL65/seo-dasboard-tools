import { AuthenticationService } from './services/authentication.service';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/authentication/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';

const seoToolsDsbrdRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'not-found', component: PageNotFoundComponentComponent },
  // tslint:disable-next-line:max-line-length
  // ------------ lazy loading Modules------------------
  {
    path: 'keyword-opportunity',
    loadChildren: './components/keyword-opportunity/keyword-opportunity.module#KeywordOpportunityModule'
  },
  {
    path: 'seo-audit-tool',
    loadChildren: './components/seo-audit-tool/seo-audit-tool.module#SeoAuditToolModule'
  },
  {
    path: 'lms',
    loadChildren: './components/lms/lms.module#LmsModule'
  },
  {
    path: 'visual-mapping',
    loadChildren: './components/visual-mapping-network/visual-mapping-network.module#VisualMappingNetworkModule'
  },
  {
    path: 'admin',
    loadChildren: './components/admin/admin.module#AdminModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(seoToolsDsbrdRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

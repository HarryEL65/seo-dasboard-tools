import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// tslint:disable-next-line:max-line-length
import { KeywordOpportunityDashboardLevelComponent } from './keyword-opportunity-dashboard-level/keyword-opportunity-dashboard-level.component';
import { KeywordOpportunityKeywordLevelComponent } from './keyword-opportunity-keyword-level/keyword-opportunity-keyword-level.component';
import { KeywordOpportunityPageLevelComponent } from './keyword-opportunity-page-level/keyword-opportunity-page-level.component';
import { KeywordOpportunityDashboardComponent } from './keyword-opportunity-dashboard/keyword-opportunity-dashboard.component';
import { AuthGuard } from '../../guards/authenticationGuard';

const keywordOpportunityRoutes: Routes = [
    // tslint:disable-next-line:max-line-length
    // { path: 'keyword-opportunity', canActivate: [AuthGuard], canActivateChild: [AuthGuard], component: KeywordOpportunityDashboardComponent , children: [
    { path: 'keyword-opportunity', component: KeywordOpportunityDashboardComponent , children: [
            { path: 'dashboard-level', component: KeywordOpportunityDashboardLevelComponent },
            { path: 'page-level', component: KeywordOpportunityPageLevelComponent },
            { path: 'keyword-level', component: KeywordOpportunityKeywordLevelComponent }
          ]},
    // { path: '**', redirectTo: '/not-found'},
];
@NgModule({
  imports: [
    RouterModule.forChild(keywordOpportunityRoutes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class KeywordOpportunityRoutingModule { }

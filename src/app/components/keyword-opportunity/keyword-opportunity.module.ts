import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeywordOpportunityDashboardComponent } from './keyword-opportunity-dashboard/keyword-opportunity-dashboard.component';
import { KeywordOpportunityPageLevelComponent } from './keyword-opportunity-page-level/keyword-opportunity-page-level.component';
import { KeywordOpportunityKeywordLevelComponent } from './keyword-opportunity-keyword-level/keyword-opportunity-keyword-level.component';
import { KeywordOpportunityQueryComponent } from './keyword-opportunity-query/keyword-opportunity-query.component';
import { KeywordOpportunityRoutingModule } from './keyword-opportunity-routing.module';
// tslint:disable-next-line:max-line-length
import { KeywordOpportunityDashboardLevelComponent } from './keyword-opportunity-dashboard-level/keyword-opportunity-dashboard-level.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [KeywordOpportunityDashboardComponent,
                 KeywordOpportunityPageLevelComponent,
                 KeywordOpportunityKeywordLevelComponent,
                 KeywordOpportunityQueryComponent,
                 KeywordOpportunityDashboardLevelComponent],
  imports: [
    CommonModule,
    KeywordOpportunityRoutingModule,
    SharedModule
  ],

  exports: []
})
export class KeywordOpportunityModule { }

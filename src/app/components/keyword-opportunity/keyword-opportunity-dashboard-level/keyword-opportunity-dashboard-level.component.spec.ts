import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordOpportunityDashboardLevelComponent } from './keyword-opportunity-dashboard-level.component';

describe('KeywordOpportunityDashboardLevelComponent', () => {
  let component: KeywordOpportunityDashboardLevelComponent;
  let fixture: ComponentFixture<KeywordOpportunityDashboardLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordOpportunityDashboardLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordOpportunityDashboardLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

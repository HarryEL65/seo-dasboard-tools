import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordOpportunityQueryComponent } from './keyword-opportunity-query.component';

describe('KeywordOpportunityQueryComponent', () => {
  let component: KeywordOpportunityQueryComponent;
  let fixture: ComponentFixture<KeywordOpportunityQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordOpportunityQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordOpportunityQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

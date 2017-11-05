import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoAuditToolComponent } from './seo-audit-tool.component';

describe('SeoAuditToolComponent', () => {
  let component: SeoAuditToolComponent;
  let fixture: ComponentFixture<SeoAuditToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoAuditToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoAuditToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

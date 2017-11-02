import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualMappingNetworkComponent } from './visual-mapping-network.component';

describe('VisualMappingNetworkComponent', () => {
  let component: VisualMappingNetworkComponent;
  let fixture: ComponentFixture<VisualMappingNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualMappingNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualMappingNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

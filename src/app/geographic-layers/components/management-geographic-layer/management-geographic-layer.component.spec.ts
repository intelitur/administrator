import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementGeographicLayerComponent } from './management-geographic-layer.component';

describe('ManagementGeographicLayerComponent', () => {
  let component: ManagementGeographicLayerComponent;
  let fixture: ComponentFixture<ManagementGeographicLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementGeographicLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementGeographicLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGeographicLayerComponent } from './details-geographic-layer.component';

describe('DetailsGeographicLayerComponent', () => {
  let component: DetailsGeographicLayerComponent;
  let fixture: ComponentFixture<DetailsGeographicLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsGeographicLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsGeographicLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

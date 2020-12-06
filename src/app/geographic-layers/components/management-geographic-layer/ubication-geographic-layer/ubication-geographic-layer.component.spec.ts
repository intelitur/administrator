import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicationGeographicLayerComponent } from './ubication-geographic-layer.component';

describe('UbicationGeographicLayerComponent', () => {
  let component: UbicationGeographicLayerComponent;
  let fixture: ComponentFixture<UbicationGeographicLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicationGeographicLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicationGeographicLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

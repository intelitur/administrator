import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGeographicLayerComponent } from './create-geographic-layer.component';

describe('CreateGeographicLayerComponent', () => {
  let component: CreateGeographicLayerComponent;
  let fixture: ComponentFixture<CreateGeographicLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGeographicLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGeographicLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

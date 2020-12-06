import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGeographicLayersComponent } from './all-geographic-layers.component';

describe('AllGeographicLayersComponent', () => {
  let component: AllGeographicLayersComponent;
  let fixture: ComponentFixture<AllGeographicLayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGeographicLayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGeographicLayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristRoutesOffersComponent } from './tourist-routes-offers.component';

describe('TouristRoutesOffersComponent', () => {
  let component: TouristRoutesOffersComponent;
  let fixture: ComponentFixture<TouristRoutesOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristRoutesOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristRoutesOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

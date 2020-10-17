import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristRoutesDetailsComponent } from './tourist-routes-details.component';

describe('TouristRoutesDetailsComponent', () => {
  let component: TouristRoutesDetailsComponent;
  let fixture: ComponentFixture<TouristRoutesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristRoutesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristRoutesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

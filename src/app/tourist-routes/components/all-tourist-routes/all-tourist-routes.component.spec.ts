import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTouristRoutesComponent } from './all-tourist-routes.component';

describe('AllTouristRoutesComponent', () => {
  let component: AllTouristRoutesComponent;
  let fixture: ComponentFixture<AllTouristRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTouristRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTouristRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

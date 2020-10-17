import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTouristRoutesComponent } from './create-tourist-routes.component';

describe('CreateTouristRoutesComponent', () => {
  let component: CreateTouristRoutesComponent;
  let fixture: ComponentFixture<CreateTouristRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTouristRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTouristRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

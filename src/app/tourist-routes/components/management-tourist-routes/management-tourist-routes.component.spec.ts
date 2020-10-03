import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementTouristRoutesComponent } from './management-tourist-routes.component';

describe('ManagementTouristRoutesComponent', () => {
  let component: ManagementTouristRoutesComponent;
  let fixture: ComponentFixture<ManagementTouristRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementTouristRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementTouristRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestsManagementComponent } from './contests-management.component';

describe('ContestsManagementComponent', () => {
  let component: ContestsManagementComponent;
  let fixture: ComponentFixture<ContestsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

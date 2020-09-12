import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestsDetailsComponent } from './contests-details.component';

describe('ContestsDetailsComponent', () => {
  let component: ContestsDetailsComponent;
  let fixture: ComponentFixture<ContestsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

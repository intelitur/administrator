import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestsCreateComponent } from './contests-create.component';

describe('ContestsCreateComponent', () => {
  let component: ContestsCreateComponent;
  let fixture: ComponentFixture<ContestsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

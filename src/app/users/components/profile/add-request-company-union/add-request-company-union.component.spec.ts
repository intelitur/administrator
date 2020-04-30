import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRequestCompanyUnionComponent } from './add-request-company-union.component';

describe('AddRequestCompanyUnionComponent', () => {
  let component: AddRequestCompanyUnionComponent;
  let fixture: ComponentFixture<AddRequestCompanyUnionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRequestCompanyUnionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRequestCompanyUnionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

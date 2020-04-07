import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCompanyUnionComponent } from './request-company-union.component';

describe('RequestCompanyUnionComponent', () => {
  let component: RequestCompanyUnionComponent;
  let fixture: ComponentFixture<RequestCompanyUnionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestCompanyUnionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCompanyUnionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

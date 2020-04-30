import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAddUserComponent } from './company-add-user.component';

describe('CompanyAddUserComponent', () => {
  let component: CompanyAddUserComponent;
  let fixture: ComponentFixture<CompanyAddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAddUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

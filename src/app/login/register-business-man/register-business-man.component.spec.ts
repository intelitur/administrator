import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBusinessManComponent } from './register-business-man.component';

describe('RegisterBusinessManComponent', () => {
  let component: RegisterBusinessManComponent;
  let fixture: ComponentFixture<RegisterBusinessManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBusinessManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBusinessManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

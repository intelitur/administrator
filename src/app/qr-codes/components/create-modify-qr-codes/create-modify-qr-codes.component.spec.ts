import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModifyQrCodesComponent } from './create-modify-qr-codes.component';

describe('CreateModifyQrCodesComponent', () => {
  let component: CreateModifyQrCodesComponent;
  let fixture: ComponentFixture<CreateModifyQrCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateModifyQrCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModifyQrCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQrCodesComponent } from './all-qr-codes.component';

describe('AllQrCodesComponent', () => {
  let component: AllQrCodesComponent;
  let fixture: ComponentFixture<AllQrCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllQrCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllQrCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsLocationComponent } from './ads-location.component';

describe('AdsLocationComponent', () => {
  let component: AdsLocationComponent;
  let fixture: ComponentFixture<AdsLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

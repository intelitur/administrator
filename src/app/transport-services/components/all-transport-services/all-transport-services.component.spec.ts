import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTransportServicesComponent } from './all-transport-services.component';

describe('AllTransportServicesComponent', () => {
  let component: AllTransportServicesComponent;
  let fixture: ComponentFixture<AllTransportServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTransportServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTransportServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTransportServicesComponent } from './request-transport-services.component';

describe('RequestTransportServicesComponent', () => {
  let component: RequestTransportServicesComponent;
  let fixture: ComponentFixture<RequestTransportServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTransportServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTransportServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

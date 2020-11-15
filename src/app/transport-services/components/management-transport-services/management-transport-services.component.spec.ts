import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementTransportServicesComponent } from './management-transport-services.component';

describe('ManagementTransportServicesComponent', () => {
  let component: ManagementTransportServicesComponent;
  let fixture: ComponentFixture<ManagementTransportServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementTransportServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementTransportServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

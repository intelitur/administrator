import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTransportServicesComponent } from './details-transport-services.component';

describe('DetailsTransportServicesComponent', () => {
  let component: DetailsTransportServicesComponent;
  let fixture: ComponentFixture<DetailsTransportServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTransportServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTransportServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

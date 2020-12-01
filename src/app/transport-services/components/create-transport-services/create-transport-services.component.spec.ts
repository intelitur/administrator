import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTransportServicesComponent } from './create-transport-services.component';

describe('CreateTransportServicesComponent', () => {
  let component: CreateTransportServicesComponent;
  let fixture: ComponentFixture<CreateTransportServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTransportServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTransportServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

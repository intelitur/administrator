import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoriesTransportServicesComponent } from './create-categories-transport-services.component';

describe('CreateCategoriesTransportServicesComponent', () => {
  let component: CreateCategoriesTransportServicesComponent;
  let fixture: ComponentFixture<CreateCategoriesTransportServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCategoriesTransportServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategoriesTransportServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

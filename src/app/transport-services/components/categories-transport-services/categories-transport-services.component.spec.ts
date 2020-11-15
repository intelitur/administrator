import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesTransportServicesComponent } from './categories-transport-services.component';

describe('CategoriesTransportServicesComponent', () => {
  let component: CategoriesTransportServicesComponent;
  let fixture: ComponentFixture<CategoriesTransportServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesTransportServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesTransportServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

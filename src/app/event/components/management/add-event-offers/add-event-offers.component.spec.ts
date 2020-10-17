import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventOffersComponent } from './add-event-offers.component';

describe('AddEventOffersComponent', () => {
  let component: AddEventOffersComponent;
  let fixture: ComponentFixture<AddEventOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

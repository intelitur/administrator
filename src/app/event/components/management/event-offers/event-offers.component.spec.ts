import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventOffersComponent } from './event-offers.component';

describe('EventOffersComponent', () => {
  let component: EventOffersComponent;
  let fixture: ComponentFixture<EventOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

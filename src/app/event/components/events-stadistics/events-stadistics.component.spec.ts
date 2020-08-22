import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsStadisticsComponent } from './events-stadistics.component';

describe('EventsStadisticsComponent', () => {
  let component: EventsStadisticsComponent;
  let fixture: ComponentFixture<EventsStadisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsStadisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsStadisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

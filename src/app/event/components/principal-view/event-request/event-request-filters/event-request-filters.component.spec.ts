import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRequestFiltersComponent } from './event-request-filters.component';

describe('EventRequestFiltersComponent', () => {
  let component: EventRequestFiltersComponent;
  let fixture: ComponentFixture<EventRequestFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventRequestFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRequestFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

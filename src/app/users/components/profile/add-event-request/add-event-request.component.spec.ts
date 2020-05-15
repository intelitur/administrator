import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventRequestComponent } from './add-event-request.component';

describe('AddEventRequestComponent', () => {
  let component: AddEventRequestComponent;
  let fixture: ComponentFixture<AddEventRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

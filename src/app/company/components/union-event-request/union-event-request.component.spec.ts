import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionEventRequestComponent } from './union-event-request.component';

describe('UnionEventRequestComponent', () => {
  let component: UnionEventRequestComponent;
  let fixture: ComponentFixture<UnionEventRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnionEventRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionEventRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

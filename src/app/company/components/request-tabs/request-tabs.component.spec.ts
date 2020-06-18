import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTabsComponent } from './request-tabs.component';

describe('RequestTabsComponent', () => {
  let component: RequestTabsComponent;
  let fixture: ComponentFixture<RequestTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

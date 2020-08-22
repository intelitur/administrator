import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsTabsComponent } from './ads-tabs.component';

describe('AdsTabsComponent', () => {
  let component: AdsTabsComponent;
  let fixture: ComponentFixture<AdsTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsStadisticsComponent } from './ads-stadistics.component';

describe('AdsStadisticsComponent', () => {
  let component: AdsStadisticsComponent;
  let fixture: ComponentFixture<AdsStadisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsStadisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsStadisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

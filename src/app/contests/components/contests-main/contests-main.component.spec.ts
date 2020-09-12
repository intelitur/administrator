import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestsMainComponent } from './contests-main.component';

describe('ContestsMainComponent', () => {
  let component: ContestsMainComponent;
  let fixture: ComponentFixture<ContestsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

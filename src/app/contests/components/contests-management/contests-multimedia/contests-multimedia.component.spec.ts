import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestsMultimediaComponent } from './contests-multimedia.component';

describe('ContestsMultimediaComponent', () => {
  let component: ContestsMultimediaComponent;
  let fixture: ComponentFixture<ContestsMultimediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestsMultimediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestsMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceAdministrationComponent } from './face-administration.component';

describe('FaceAdministrationComponent', () => {
  let component: FaceAdministrationComponent;
  let fixture: ComponentFixture<FaceAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

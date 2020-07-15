import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionsFilterComponent } from './petitions-filter.component';

describe('PetitionsFilterComponent', () => {
  let component: PetitionsFilterComponent;
  let fixture: ComponentFixture<PetitionsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetitionsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

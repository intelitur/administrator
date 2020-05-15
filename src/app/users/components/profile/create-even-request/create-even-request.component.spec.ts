import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEvenRequestComponent } from './create-even-request.component';

describe('CreateEvenRequestComponent', () => {
  let component: CreateEvenRequestComponent;
  let fixture: ComponentFixture<CreateEvenRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEvenRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEvenRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

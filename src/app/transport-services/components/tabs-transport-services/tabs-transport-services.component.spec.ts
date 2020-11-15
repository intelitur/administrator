import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsTransportServicesComponent } from './tabs-transport-services.component';

describe('TabsTransportServicesComponent', () => {
  let component: TabsTransportServicesComponent;
  let fixture: ComponentFixture<TabsTransportServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsTransportServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsTransportServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMapAirPollutionMapComponent } from './demo-map-air-pollution-map.component';

describe('DemoMapAirPollutionMapComponent', () => {
  let component: DemoMapAirPollutionMapComponent;
  let fixture: ComponentFixture<DemoMapAirPollutionMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoMapAirPollutionMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMapAirPollutionMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

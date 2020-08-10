import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextDayWeatherComponent } from './next-day-weather.component';

describe('NextDayWeatherComponent', () => {
  let component: NextDayWeatherComponent;
  let fixture: ComponentFixture<NextDayWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextDayWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextDayWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockModeSelectorComponent } from './clock-mode-selector.component';

describe('ClockModeSelectorComponent', () => {
  let component: ClockModeSelectorComponent;
  let fixture: ComponentFixture<ClockModeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockModeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockModeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

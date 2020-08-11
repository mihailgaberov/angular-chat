import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingOptionsComponent } from './sending-options.component';

describe('SendingOptionsComponent', () => {
  let component: SendingOptionsComponent;
  let fixture: ComponentFixture<SendingOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendingOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendingOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

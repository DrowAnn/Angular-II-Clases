import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalEjemplo6Component } from './signal-ejemplo6.component';

describe('SignalEjemplo6Component', () => {
  let component: SignalEjemplo6Component;
  let fixture: ComponentFixture<SignalEjemplo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalEjemplo6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalEjemplo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSliderChange, MatSliderModule } from '@angular/material/slider';

import { HeroComponent } from './hero.component';

import { Loan } from 'src/app/shared/model/loan.model';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<HeroComponent>;
  let mockLoan: Loan = {
    loanValue: 6,
    loanDuration: 10,
    debt: 918907,
    isCoveredArea: false,
    name: 'vasha',
    nik: '123',
    phone: '123',
    discover: 'internet',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSliderModule],
      declarations: [HeroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct loan value', () => {
    const loanValueDisplay = de.nativeElement.querySelector(
      '#landing-hero__loan-value',
    );
    component.loan = mockLoan;

    fixture.detectChanges();

    expect(loanValueDisplay.innerHTML).toBe(' 6 Juta ');
  });

  it('should display correct loan duration', () => {
    const loanDurationDisplay = de.nativeElement.querySelector(
      '#landing-hero__loan-duration',
    );
    component.loan = mockLoan;

    fixture.detectChanges();

    expect(loanDurationDisplay.innerHTML).toBe(' 10 Bulan ');
  });

  it('should display correct debt value', () => {
    const loanValueDisplay = de.nativeElement.querySelector(
      '#landing-hero__debt-value',
    );
    component.loan = mockLoan;

    fixture.detectChanges();

    expect(loanValueDisplay.innerHTML).toBe(' Rp918,907 ');
  });

  it('should emit an event when loan value slider changed', () => {
    let mockEvent: MatSliderChange;
    const spy = spyOn(component.loanValueSliderChange, 'emit');

    component.onLoanValueChange(mockEvent);

    expect(spy).toHaveBeenCalled();
  });

  it('should emit an event when loan duration slider changed', () => {
    let mockEvent: MatSliderChange;
    const spy = spyOn(component.loanDurationSliderChange, 'emit');

    component.onLoanDurationChange(mockEvent);

    expect(spy).toHaveBeenCalled();
  });
});

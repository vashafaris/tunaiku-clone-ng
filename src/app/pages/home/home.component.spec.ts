import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSliderChange, MatSliderModule } from '@angular/material/slider';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { Loan } from 'src/app/shared/model/loan.model';
import { LoanService } from 'src/app/shared/services/loan.store';

import { HomeComponent } from './home.component';
import { AdvantagesComponent } from './shared/components/advantages/advantages.component';
import { AwardsComponent } from './shared/components/awards/awards.component';
import { DownloadMobileComponent } from './shared/components/download-mobile/download-mobile.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { LendingProcessComponent } from './shared/components/lending-process/lending-process.component';
import { LoanEligibilityComponent } from './shared/components/loan-eligibility/loan-eligibility.component';
import { RatesAndFeesComponent } from './shared/components/rates-and-fees/rates-and-fees.component';
import { ServiceAreaComponent } from './shared/components/service-area/service-area.component';
import { StatisticsComponent } from './shared/components/statistics/statistics.component';
import { TestimonialComponent } from './shared/components/testimonial/testimonial.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockEvent: MatSliderChange;
  let loanService: LoanService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NavbarModule, MatSliderModule],
      declarations: [
        HomeComponent,
        HeroComponent,
        StatisticsComponent,
        TestimonialComponent,
        DownloadMobileComponent,
        AdvantagesComponent,
        LoanEligibilityComponent,
        LendingProcessComponent,
        ServiceAreaComponent,
        RatesAndFeesComponent,
        AwardsComponent,
      ],
      providers: [LoanService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    loanService = TestBed.get(LoanService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loan service methods when onLoanValueChange is called', () => {
    const mockEventOnLoanValueChange = {
      ...mockEvent,
      value: 2,
    };
    const setLoanValueSpy = spyOn(loanService, 'setLoanValue');
    const calculateDebtSpy = spyOn(loanService, 'calculateDebt');

    component.onLoanValueChange(mockEventOnLoanValueChange);

    expect(setLoanValueSpy).toHaveBeenCalled();
    expect(calculateDebtSpy).toHaveBeenCalled();
  });

  it('should call loan service methods when onLoanDurationChange is called', () => {
    const mockEventOnLoanDurationChange = {
      ...mockEvent,
      value: 2,
    };
    const setLoanDurationSpy = spyOn(loanService, 'setLoanDuration');
    const calculateDebtSpy = spyOn(loanService, 'calculateDebt');

    component.onLoanDurationChange(mockEventOnLoanDurationChange);

    expect(setLoanDurationSpy).toHaveBeenCalled();
    expect(calculateDebtSpy).toHaveBeenCalled();
  });
});

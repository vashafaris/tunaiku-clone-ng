import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSliderModule } from '@angular/material/slider';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';

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
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

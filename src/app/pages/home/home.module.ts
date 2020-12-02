import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MatSliderModule } from '@angular/material/slider';

import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { HeroComponent } from './shared/components/hero/hero.component';
import { StatisticsComponent } from './shared/components/statistics/statistics.component';
import { TestimonialComponent } from './shared/components/testimonial/testimonial.component';
import { AdvantagesComponent } from './shared/components/advantages/advantages.component';
import { RatesAndFeesComponent } from './shared/components/rates-and-fees/rates-and-fees.component';
import { AwardsComponent } from './shared/components/awards/awards.component';
import { DownloadMobileComponent } from './shared/components/download-mobile/download-mobile.component';
import { LoanEligibilityComponent } from './shared/components/loan-eligibility/loan-eligibility.component';
import { LendingProcessComponent } from './shared/components/lending-process/lending-process.component';
import { ServiceAreaComponent } from './shared/components/service-area/service-area.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    StatisticsComponent,
    TestimonialComponent,
    AdvantagesComponent,
    RatesAndFeesComponent,
    AwardsComponent,
    DownloadMobileComponent,
    LoanEligibilityComponent,
    LendingProcessComponent,
    ServiceAreaComponent,
  ],
  imports: [
    CommonModule,
    NavbarModule,
    MatSliderModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
})
export class HomeModule {}

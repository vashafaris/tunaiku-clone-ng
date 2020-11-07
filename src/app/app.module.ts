import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {
  MatRadioModule,
  MAT_RADIO_DEFAULT_OPTIONS,
} from '@angular/material/radio';

import { routes } from './router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './presentation/pages/home/home.component';
import { NavbarComponent } from './presentation/shared/components/navbar/navbar.component';
import { ConfirmServiceAreaComponent } from './presentation/pages/confirm-service-area/confirm-service-area.component';
import { MNavbarComponent } from './presentation/shared/components/m-navbar/m-navbar.component';
import { MSiteWrapperComponent } from './presentation/shared/components/m-site-wrapper/m-site-wrapper.component';
import { CreateAccountComponent } from './presentation/pages/create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ConfirmServiceAreaComponent,
    MNavbarComponent,
    MSiteWrapperComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatSliderModule,
    MatRadioModule,
  ],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'accent' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

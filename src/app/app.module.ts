import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';

import { routes } from './router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ConfirmServiceAreaComponent } from './pages/confirm-service-area/confirm-service-area.component';
import { MNavbarComponent } from './shared/components/m-navbar/m-navbar.component';
import { MSiteWrapperComponent } from './shared/components/m-site-wrapper/m-site-wrapper.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { AccountCreatedComponent } from './pages/account-created/account-created.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ConfirmServiceAreaComponent,
    MNavbarComponent,
    MSiteWrapperComponent,
    CreateAccountComponent,
    AccountCreatedComponent,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

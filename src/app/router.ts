import { Routes } from '@angular/router';
import { AccountCreatedComponent } from './presentation/pages/account-created/account-created.component';
import { ConfirmServiceAreaComponent } from './presentation/pages/confirm-service-area/confirm-service-area.component';
import { CreateAccountComponent } from './presentation/pages/create-account/create-account.component';
import { HomeComponent } from './presentation/pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'loan/confirm-service-area',
    component: ConfirmServiceAreaComponent,
  },
  {
    path: 'loan/create-account',
    component: CreateAccountComponent,
  },
  {
    path: 'loan/account-created',
    component: AccountCreatedComponent,
  },
];

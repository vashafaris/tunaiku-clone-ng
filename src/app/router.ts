import { Routes } from '@angular/router';
import { AccountCreatedComponent } from './pages/account-created/account-created.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'loan/confirm-service-area',
    loadChildren: () =>
      import('./pages/confirm-service-area/confirm-service-area.module').then(
        m => m.ConfirmServiceAreaModule,
      ),
  },
  {
    path: 'loan/create-account',
    loadChildren: () =>
      import('./pages/create-account/create-account.module').then(
        m => m.CreateAccountModule,
      ),
  },
  {
    path: 'loan/account-created',
    loadChildren: () =>
      import('./pages/account-created/account-created.module').then(
        m => m.AccountCreatedModule,
      ),
  },
];

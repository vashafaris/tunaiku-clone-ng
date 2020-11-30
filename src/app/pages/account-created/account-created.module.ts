import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AccountCreatedComponent } from './account-created.component';
import { MSiteWrapperModule } from 'src/app/shared/components/m-site-wrapper/m-site-wrapper.module';
import { MNavbarModule } from 'src/app/shared/components/m-navbar/m-navbar.module';

@NgModule({
  declarations: [AccountCreatedComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MSiteWrapperModule,
    MNavbarModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountCreatedComponent,
      },
    ]),
  ],
})
export class AccountCreatedModule {}

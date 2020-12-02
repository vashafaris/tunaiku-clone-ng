import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CreateAccountComponent } from './create-account.component';
import { MSiteWrapperModule } from 'src/app/shared/components/m-site-wrapper/m-site-wrapper.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MSiteWrapperModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateAccountComponent,
      },
    ]),
  ],
})
export class CreateAccountModule {}

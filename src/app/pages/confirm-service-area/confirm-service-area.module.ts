import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';

import { ConfirmServiceAreaComponent } from './confirm-service-area.component';

import { MSiteWrapperModule } from 'src/app/shared/components/m-site-wrapper/m-site-wrapper.module';

@NgModule({
  declarations: [ConfirmServiceAreaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MSiteWrapperModule,
    RouterModule.forChild([
      {
        path: '',
        component: ConfirmServiceAreaComponent,
      },
    ]),
  ],
})
export class ConfirmServiceAreaModule {}

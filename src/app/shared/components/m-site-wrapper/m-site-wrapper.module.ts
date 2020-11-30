import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MSiteWrapperComponent } from './m-site-wrapper.component';
import { MNavbarModule } from '../m-navbar/m-navbar.module';

@NgModule({
  declarations: [MSiteWrapperComponent],
  imports: [CommonModule, MNavbarModule],
  exports: [MSiteWrapperComponent],
})
export class MSiteWrapperModule {}

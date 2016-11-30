import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { MoreDetailsComponent } from './more-details.component';

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    MoreDetailsComponent
  ],
  imports: [
    SharedModule
  ]
})
export default class MoreDetailsModule {}

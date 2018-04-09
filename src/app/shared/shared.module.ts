import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    TimePipe
  ],
  declarations: [
    TimePipe
  ],
  exports: [
    TimePipe
  ]
})
export class SharedModule { }

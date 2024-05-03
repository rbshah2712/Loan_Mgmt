import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityLogRoutingModule } from './activity-log-routing.module';
import { ActivityLogComponent } from './activity-log.component';


@NgModule({
  declarations: [
    ActivityLogComponent
  ],
  imports: [
    CommonModule,
    ActivityLogRoutingModule
  ]
})
export class ActivityLogModule { }

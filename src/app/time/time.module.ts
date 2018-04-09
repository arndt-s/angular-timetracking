import { ProjectsComponent } from './projects/projects.component';
import { TimeTrackingComponent } from './time-tracking/time-tracking.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TimeRoutingModule } from './time.routing';
import { ProjectAddComponent } from './project-add/project-add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectComponent } from './project/project.component';
import { TopicComponent } from './topic/topic.component';
import { PeriodComponent } from './period/period.component';
import { TopicAddComponent } from './topic-add/topic-add.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TimeRoutingModule,
    NgbModule,
    SharedModule
  ],
  declarations: [
    TimeTrackingComponent,
    ProjectsComponent,
    ProjectAddComponent,
    ProjectComponent,
    TopicComponent,
    PeriodComponent,
    TopicAddComponent
  ]
})
export class TimeModule { }

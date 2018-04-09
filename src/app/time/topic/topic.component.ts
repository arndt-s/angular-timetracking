import { TimeTrackingActions } from './../../core/redux/action';
import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../model/topic';
import { SimpleChanges, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { dispatch } from '@angular-redux/store';
import { Project } from '../model/project';
import { Period } from '../model/period';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit, OnChanges {

  @Input()
  project: Project;

  @Input()
  topic: Topic;

  totalTime: number;
  isTracking: boolean;

  constructor(private actions: TimeTrackingActions) { }

  ngOnInit() {
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['topic']) {
      this.calcTotalTime();
      this.calcIsTracking();
    }
  }

  calcIsTracking() {
    this.isTracking = this.topic.periods.length !== 0 && !!this.topic.periods.find(p => p.to === null);
  }

  calcTotalTime() {
    this.totalTime = this.topic.periods.reduce((total, period, index) => total + ((period.to ? period.to : Date.now()) - period.from), 0);
  }

  @dispatch()
  startTracking() {
    return this.actions.startPeriod(this.project.title, this.topic.title);
  }

  @dispatch()
  stopTracking() {
    return this.actions.endPeriod(this.project.title, this.topic.title);
  }

  @dispatch()
  reportPeriod(period: Period) {
    return this.actions.reportPeriod(this.project.title, this.topic.title, period);
  }

  @dispatch()
  deletePeriod(period: Period) {
    return this.actions.deletePeriod(this.project.title, this.topic.title, period);
  }

}

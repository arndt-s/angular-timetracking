import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Project } from '../model/project';
import { Topic } from '../model/topic';
import { dispatch } from '@angular-redux/store';
import { TimeTrackingActions } from '../../core/redux/action';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, OnChanges {

  @Input()
  project: Project;

  showAddTopicDialog = false;
  totalTime: number;

  constructor(private actions: TimeTrackingActions) { }

  ngOnInit() {
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['project']) {
      this.calcTotalTime();
    }
  }

  calcTotalTime() {
    const periods = this.project.topics.map(t => t.periods).reduce((arr, value) => arr.concat(value), []);
    this.totalTime = periods.reduce((total, period, index) => total + ((period.to ? period.to : Date.now()) - period.from), 0);
  }

  openCreateDialog() {
    this.showAddTopicDialog = !this.showAddTopicDialog;
  }

  @dispatch()
  onCreateTopic(topic: Topic) {
    this.showAddTopicDialog = false;
    return this.actions.addTopic(this.project.title, topic);
  }

}

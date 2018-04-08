import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../model/project';
import { Topic } from '../model/topic';
import { dispatch } from '@angular-redux/store';
import { TimeTrackingActions } from '../../core/redux/action';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input()
  project: Project;

  showAddTopicDialog = false;

  constructor(private actions: TimeTrackingActions) { }

  ngOnInit() {
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

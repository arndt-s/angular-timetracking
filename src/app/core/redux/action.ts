import { Injectable } from '@angular/core';

import { Period } from './../../time/model/period';
import { TimeTrackingState } from './store';
import { Action } from 'redux';
import { Project } from '../../time/model/project';
import { Topic } from '../../time/model/topic';

export class TimeTrackingAction implements Action {
  type: string;
  payload: any;
  meta: any;
  error: any;

  constructor(action: any) {
    this.type = action.type;
    this.meta = action.meta;
    this.payload = action.payload;
    this.error = action.error;
  }
}

@Injectable()
export class TimeTrackingActions {

  static PROJECT_ADD = 'project.add';
  static TOPIC_ADD = 'topic.add';
  static PERIOD_START = 'period.start';
  static PERIOD_END = 'period.end';

  addProject(project: any): TimeTrackingAction {
    return {
      type: TimeTrackingActions.PROJECT_ADD,
      payload: project,
      meta: null,
      error: null
    };
  }

  addTopic(project: string, topic: Topic): TimeTrackingAction {
    return {
      type: TimeTrackingActions.TOPIC_ADD,
      payload: {
        project: project,
        topic: topic
      },
      meta: null,
      error: null
    };
  }

  startPeriod(project: string, topic: string): TimeTrackingAction {
    return {
      type: TimeTrackingActions.PERIOD_START,
      payload: {
        project: project,
        topic: topic
      },
      meta: null,
      error: null
    };
  }

  endPeriod(project: string, topic: string): TimeTrackingAction {
    return {
      type: TimeTrackingActions.PERIOD_END,
      payload: {
        project: project,
        topic: topic
      },
      meta: null,
      error: null
    };
  }

}

import { Topic } from './../../time/model/topic';
import { JiraApi } from './../jira/jira.api';
import { TimeTrackingState } from './store';
import { TimeTrackingAction, TimeTrackingActions } from './action';
import { Middleware, Action, MiddlewareAPI } from 'redux';
import { getStateFromStorage } from './persistence';

import { getAppInjector } from '../../app.injector';
import { Period } from '../../time/model/period';
import { Project } from '../../time/model/project';

export const middleWare: Middleware = store => next => action => {
  let nextAction;
  if (action.type === TimeTrackingActions.LOADING) {
    nextAction = next(loadState());
  } else if (action.type === TimeTrackingActions.PERIOD_REPORT) {
    reportPeriod(store.getState(), action, next);
    nextAction = next(action);
  } else {
    nextAction = next(action);
  }
  return nextAction;
};

function loadState(): Action {
  const state = getStateFromStorage();
  if (state) {
    return <TimeTrackingAction>{
      type: TimeTrackingActions.LOADING_SUCCESS,
      payload: state,
      meta: null,
      error: null
    };
  } else {
    return <TimeTrackingAction>{
      type: TimeTrackingActions.LOADING_ERROR,
      payload: null,
      meta: null,
      error: 'Daten wurden nicht gefunden'
    };
  }
}

function reportPeriod(lastState: any, action: Action, next: any) {
  const injector = getAppInjector();
  const jiraApi = injector.get(JiraApi);
  const actions = injector.get(TimeTrackingActions);
  const project: Project = lastState.projects.find(p => p.title === action['payload']['project']);
  const topic: Topic = project.topics.find(t => t.title === action['payload']['topic']);
  const period: Period = action['payload']['period'];
  const jira = !!topic.jira ? topic.jira : project.jira;

  jiraApi.addWork(jira, period, lastState.user).subscribe(
    resp => next(actions.reportPeriodSuccess(project.title, topic.title, period)),
    error => next(actions.reportPeriodError(project.title, topic.title, period, error))
  );
}

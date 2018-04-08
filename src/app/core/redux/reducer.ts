import { Topic } from './../../time/model/topic';
import { TimeTrackingState, INITIAL_STATE } from './store';
import { TimeTrackingActions } from './action';
import { Action } from 'redux';
import { Project } from '../../time/model/project';
import { Period } from '../../time/model/period';

export function timeTrackingReducer(lastState: TimeTrackingState, action: Action): TimeTrackingState {
  switch (action.type) {
    case TimeTrackingActions.PROJECT_ADD:
      return addProject(lastState, action);
    case TimeTrackingActions.TOPIC_ADD: {
      return addTopic(lastState, action);
    }
    case TimeTrackingActions.PERIOD_START: {
      return startPeriod(lastState, action);
    }
    case TimeTrackingActions.PERIOD_END: {
      return endPeriod(lastState, action);
    }
    case TimeTrackingActions.LOADING: {
      return loading(lastState, action);
    }
    case TimeTrackingActions.LOADING_SUCCESS: {
      return loadingSuccess(lastState, action);
    }
    case TimeTrackingActions.LOADING_ERROR: {
      return loadingError(lastState, action);
    }
    default: {
      return INITIAL_STATE;
    }
  }
}

function addProject(lastState: TimeTrackingState, action: Action): TimeTrackingState {
  const project = action['payload'];
  lastState.projects.push(project);
  return {
    loading: false,
    error: null,
    projects: lastState.projects,
    labels: lastState.labels,
    user: lastState.user
  };
}

function addTopic(lastState: TimeTrackingState, action: Action): TimeTrackingState {
  const projectTitle = action['payload']['project'];
  const topic = action['payload']['topic'];
  const project: Project = lastState.projects.find(p => p.title === projectTitle);
  project.topics.push(topic);
  return {
    loading: false,
    error: null,
    projects: lastState.projects,
    labels: lastState.labels,
    user: lastState.user
  };
}

function startPeriod(lastState: TimeTrackingState, action: Action): TimeTrackingState {
  const projectTitle = action['payload']['project'];
  const topicTitle = action['payload']['topic'];
  const projects = lastState.projects.map(x => Object.assign({}, x));
  const project: Project = projects.find(p => p.title === projectTitle);
  const topic: Topic = project.topics.find(t => t.title === topicTitle);
  topic.periods.push(new Period());
  return {
    loading: false,
    error: null,
    projects: projects,
    labels: lastState.labels,
    user: lastState.user
  };
}

function endPeriod(lastState: TimeTrackingState, action: Action): TimeTrackingState {
  const projectTitle = action['payload']['project'];
  const topicTitle = action['payload']['topic'];
  const projects = lastState.projects.map(x => Object.assign({}, x));
  const project: Project = projects.find(p => p.title === projectTitle);
  const topic: Topic = project.topics.find(t => t.title === topicTitle);
  const period: Period = topic.periods.find(p => p.to === null);
  period.to = Date.now();
  return {
    loading: false,
    error: null,
    projects: projects,
    labels: lastState.labels,
    user: lastState.user
  };
}

function loading(lastState: TimeTrackingState, action: Action): TimeTrackingState {
  return {
    loading: true,
    error: null,
    projects: lastState.projects,
    labels: lastState.labels,
    user: lastState.user
  };
}

function loadingSuccess(lastState: TimeTrackingState, action: Action): TimeTrackingState {
  return action['payload'];
}

function loadingError(lastState: TimeTrackingState, action: Action): TimeTrackingState {
  return {
    loading: false,
    error: action['payload'],
    projects: lastState.projects,
    labels: lastState.labels,
    user: lastState.user
  };
}

import { TimeTrackingState } from './store';
import { Project } from './../../time/model/project';

export interface TimeTrackingState {
  loading: boolean;
  error: any;
  projects: Array<Project>;
  labels: Array<string>;
  user: string;
}

export const INITIAL_STATE: TimeTrackingState = {
  loading: false,
  error: null,
  projects: [{
    title: 'Routing',
    jira: 'RO-1',
    topics: [{
      title: 'Entwicklung',
      jira: 'RO-2',
      periods: [
        {
          to: Date.now(),
          from: Date.now() - 5000000,
          reported: true,
          isReporting: false
        },
        {
          to: Date.now(),
          from: Date.now() - 1200000,
          reported: false,
          isReporting: false
        },
        {
          to: null,
          from: Date.now() - 12000,
          reported: false,
          isReporting: false
        }
      ]
    }
    ]
  }],
  labels: [],
  user: null
};

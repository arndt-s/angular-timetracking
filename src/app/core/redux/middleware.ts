import { TimeTrackingState } from './store';
import { TimeTrackingAction, TimeTrackingActions } from './action';
import { Middleware, Action } from 'redux';
import { getStateFromStorage } from './persistence';

export const middleWare: Middleware = store => next => action => {
  let nextAction;
  if (action.type === TimeTrackingActions.LOADING) {
    nextAction = next(loadState());
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

import { TimeTrackingState } from './store';
import { TimeTrackingAction, TimeTrackingActions } from './action';
import { Middleware, Action } from 'redux';

const localStorageKey = 'timetracking.state';

export const middleWare: Middleware = store => next => action => {
  let nextAction;
  if (action.type === TimeTrackingActions.LOADING) {
    nextAction = next(loadState());
  } else {
    const state = store.getState();
    localStorage.setItem(localStorageKey, JSON.stringify(state));
    nextAction = next(action);
  }
  return action;
};

function loadState(): Action {
  const state = JSON.parse(localStorage.getItem(localStorageKey));
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

import { TimeTrackingState } from './store';

const localStorageKey = 'timetracking.state';

export function saveStateToStorage(state: TimeTrackingState) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}

export function getStateFromStorage() {
  return JSON.parse(localStorage.getItem(localStorageKey));
}

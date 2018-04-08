import { TimeTrackingAction } from './action';
import { Middleware } from 'redux';

export const middleWare: Middleware = store => next => action => {
  return next(action);
};


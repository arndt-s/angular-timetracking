import { TimeTrackingState, INITIAL_STATE } from './redux/store';
import { timeTrackingReducer } from './redux/reducer';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgModule } from '@angular/core';

import { RequestOptions, Http } from '@angular/http';
import { middleWare } from './redux/middleware';
import { TimeTrackingActions } from './redux/action';
import { saveStateToStorage } from './redux/persistence';

@NgModule({
  imports: [
    NgReduxModule
  ],
  providers: [
    TimeTrackingActions
  ]
})
export class CoreModule {

  constructor(ngRedux: NgRedux<TimeTrackingState>, devTools: DevToolsExtension) {

    const storeEnhancers = devTools.isEnabled() ?
      [ devTools.enhancer() ] :
      [];

    // Tell @angular-redux/store about our rootReducer and our initial state.
    // It will use this to create a redux store for us and wire up all the
    // events.
    ngRedux.configureStore(
      timeTrackingReducer,
      INITIAL_STATE,
      [middleWare],
      storeEnhancers);

    ngRedux.subscribe(() => {
      console.info('save');
      saveStateToStorage(ngRedux.getState());
    });
  }

}

import { JiraApi } from './jira/jira.api';
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
    TimeTrackingActions,
    JiraApi
  ]
})
export class CoreModule {

  constructor(ngRedux: NgRedux<TimeTrackingState>, devTools: DevToolsExtension) {

    const storeEnhancers = devTools.isEnabled() ?
      [ devTools.enhancer() ] :
      [];

    ngRedux.configureStore(
      timeTrackingReducer,
      INITIAL_STATE,
      [middleWare],
      storeEnhancers);

    ngRedux.subscribe(() => {
      saveStateToStorage(ngRedux.getState());
    });
  }

}

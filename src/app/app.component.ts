import { TimeTrackingActions } from './core/redux/action';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { dispatch } from '@angular-redux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private actions: TimeTrackingActions) { }

  ngOnInit() {
    this.loadState();
  }

  @dispatch()
  loadState() {
    return this.actions.loading();
  }

}

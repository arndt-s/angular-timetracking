import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Period } from '../model/period';
import { SimpleChanges, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { TimeTrackingActions } from '../../core/redux/action';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css']
})
export class PeriodComponent implements OnInit, OnChanges {

  @Input()

  @Input()
  period: Period;

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onStop = new EventEmitter<any>();

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onReport = new EventEmitter<Period>();

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onDelete = new EventEmitter<Period>();

  time: number;

  constructor(private actions: TimeTrackingActions) { }

  ngOnInit() {
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['period']) {
      this.time = (this.period.to ? this.period.to : Date.now()) - this.period.from;
    }
  }

  stopTracking() {
    return this.onStop.emit();
  }

  report() {
    this.onReport.emit(this.period);
  }

  delete() {
    this.onDelete.emit(this.period);
  }

}

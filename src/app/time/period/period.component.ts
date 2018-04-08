import { Component, OnInit, Input } from '@angular/core';
import { Period } from '../model/period';
import { SimpleChanges, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css']
})
export class PeriodComponent implements OnInit, OnChanges {

  @Input()
  period: Period;

  time: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['period']) {
      this.time = (this.period.to ? this.period.to : Date.now()) - this.period.from;
    }
  }

}

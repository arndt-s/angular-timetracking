import { Pipe, PipeTransform } from '@angular/core';
import * as timespan from 'timespan/lib/time-span';

@Pipe({ name: 'time' })
export class TimePipe implements PipeTransform {
  transform(value: any, type: string, to?: any): string {
    let span;
    if (type === 'dates') {
      const dateFrom = !!value ? new Date(value) : new Date();
      const dateTo = !!to ? new Date(to) : new Date();
      span = timespan.fromDates(dateFrom, dateTo, true);
    } else if (type === 'milli') {
      span = timespan.fromMilliseconds(value);
    } else {
      return '';
    }

    const minutes = '' + span.minutes;
    const hours = '' + span.hours;
    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
  }
}

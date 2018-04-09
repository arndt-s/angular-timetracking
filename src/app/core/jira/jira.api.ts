import { Period } from './../../time/model/period';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JiraApi {

  private jiraEndpoint = '';

  constructor(private httpClient: HttpClient) { }

  addWork(jira: string, period: Period, user: string) {

    const url = this.jiraEndpoint + `/rest/api/2/issue/${jira}/worklog`;
    const body = {
      'comment': 'work tracking by timetracker',
      'started': new Date(period.from).toString(),
      'timeSpentSeconds': (period.to - period.from) / 1000
    };

    return this.httpClient.post(url, body);
  }

}

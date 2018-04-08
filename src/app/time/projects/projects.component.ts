import { Project } from './../model/project';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select, dispatch } from '@angular-redux/store';
import { TimeTrackingActions } from '../../core/redux/action';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @select('projects') readonly projects$: Observable<Array<Project>>;
  showAddProjectDialog = false;

  constructor(private actions: TimeTrackingActions) { }

  ngOnInit() {
  }

  openAddDialog() {
    this.showAddProjectDialog = !this.showAddProjectDialog;
  }

  @dispatch()
  onCreate(project: Project) {
    this.showAddProjectDialog = false;
    return this.actions.addProject(project);
  }

}

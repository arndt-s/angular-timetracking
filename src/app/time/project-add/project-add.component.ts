import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { dispatch } from '@angular-redux/store';
import { Project } from '../model/project';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  form: FormGroup;

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onCreate = new EventEmitter<Project>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loadForm();
  }

  private loadForm() {
    this.form = this.fb.group({
      title: [null],
      jira: [null]
    });
  }

  onSubmit() {
    this.onCreate.emit({
      title: this.form.value['title'],
      jira: this.form.value['jira'],
      topics: null,
    });
  }


}

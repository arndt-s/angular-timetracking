import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Topic } from '../model/topic';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-topic-add',
  templateUrl: './topic-add.component.html',
  styleUrls: ['./topic-add.component.css']
})
export class TopicAddComponent implements OnInit {

  form: FormGroup;

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onCreate = new EventEmitter<Topic>();

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
      periods: []
    });
  }

}

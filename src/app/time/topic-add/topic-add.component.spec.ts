import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicAddComponent } from './topic-add.component';

describe('TopicAddComponent', () => {
  let component: TopicAddComponent;
  let fixture: ComponentFixture<TopicAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export interface TaskFormValues {
  title: string;
  description: string;
}

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Output() public onFormValidate: EventEmitter<TaskFormValues> = new EventEmitter<TaskFormValues>();
  public taskFormValue: TaskFormValues = {
    title: '',
    description: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  public validate(): void {
    this.onFormValidate.emit(this.taskFormValue);
    this.taskFormValue.title = '';
    this.taskFormValue.description = '';
  }

}

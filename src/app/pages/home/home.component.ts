import {Component, OnInit} from '@angular/core';
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public taskFormValue = {
    title: '',
    description: '',
  }

  constructor(public readonly tasksService: TasksService) { }

  ngOnInit(): void {
  }

  public validate(): void {
    this.tasksService
      .create(this.taskFormValue.title, this.taskFormValue.description);
    this.taskFormValue.title = '';
    this.taskFormValue.description = '';
  }
}

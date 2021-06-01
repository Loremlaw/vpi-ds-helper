import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TasksService} from "../../services/tasks.service";
import {Task} from "../../modeles/task";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  public task: Task | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly tasksService: TasksService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    if (id) {
      this.task = this.tasksService.get(id);
    }
  }

}

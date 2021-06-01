import { Component, OnInit } from '@angular/core';
import {Task} from "../../modeles/task";
import {ActivatedRoute} from "@angular/router";
import {TasksService} from "../../services/tasks.service";
import {TaskFormValues} from "../../components/task-form/task-form.component";
import {Location} from "@angular/common";

@Component({
  selector: 'app-task-better-form',
  templateUrl: './task-better-form.component.html',
  styleUrls: ['./task-better-form.component.scss']
})
export class TaskBetterFormComponent implements OnInit {

  public task: Task | undefined;
  public formValues: TaskFormValues | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly tasksService: TasksService,
    private readonly location: Location,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    if (id) {
      this.task = this.tasksService.get(id);
      this.formValues = {
        title: this.task?.title,
        description: this.task?.description,
      }
    }
  }

  public validate(): void {
    this.tasksService.update(this.task?.id, this.formValues);
    this.location.back();
  }

}

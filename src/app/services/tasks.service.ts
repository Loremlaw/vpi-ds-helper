import {Injectable} from '@angular/core';
import {Task, TaskStatus} from "../modeles/task";
import {TaskFormValues} from "../components/task-form/task-form.component";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private currentId = 1;

  private tasks: Task[] = [];

  constructor() { }

  public get allTasks(): Task[] {
    return this.tasks;
  }

  public delete(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  public toggleStatus(id: number): void {
    const task = this.get(id);
    if (!task) {
      console.error(`Task with : '${id}' does not exists`);
      return;
    }

    task.status = task.status === TaskStatus.TODO ? TaskStatus.DONE : TaskStatus.TODO;
  }

  public create(values: TaskFormValues): void {
    this.tasks.push({
      id: this.currentId++,
      title: values.title,
      description: values.description,
      status: TaskStatus.TODO
    });
  }

  public get(id: number): Task | undefined {
    id = Number(id);
    return this.tasks.find(t => this.tasks.find(t => t.id === id));
  }
}

import {Injectable} from '@angular/core';
import {Task, TaskStatus} from "../modeles/task";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private currentId = 0;

  private tasks: Task[] = [];

  constructor() { }

  public get allTasks(): Task[] {
    return this.tasks;
  }

  public delete(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  public toggleStatus(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (!task) {
      console.error(`Task with : '${id}' does not exists`);
      return;
    }

    task.status = task.status === TaskStatus.TODO ? TaskStatus.DONE : TaskStatus.TODO;
  }

  public create(title: string, description: string): void {
    this.tasks.push({
      id: this.currentId++,
      title,
      description,
      status: TaskStatus.TODO
    });
  }
}

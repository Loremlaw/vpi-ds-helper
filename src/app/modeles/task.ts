export enum TaskStatus {
  TODO = 'todo',
  DONE = 'done',
}

export interface Task {
  id: number;
  title?: string;
  description?: string;
  status: TaskStatus;
}

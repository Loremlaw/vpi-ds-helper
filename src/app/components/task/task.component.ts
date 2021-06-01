import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../modeles/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() public task!: Task;
  @Output() public doDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() public doToggle: EventEmitter<number> = new EventEmitter<number>();
  @Output() public doConsult: EventEmitter<number> = new EventEmitter<number>();
  @Output() public doEdit: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}

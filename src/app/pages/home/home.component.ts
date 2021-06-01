import {Component, OnInit} from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public readonly tasksService: TasksService,
    public readonly router: Router,
  ) { }

  ngOnInit(): void {
  }
}

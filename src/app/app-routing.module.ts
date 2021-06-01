import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {TaskDetailsComponent} from "./pages/task-details/task-details.component";
import {TaskBetterFormComponent} from "./pages/task-better-form/task-better-form.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'details', component: TaskDetailsComponent},
  {path: 'edit', component: TaskBetterFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

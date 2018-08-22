import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutListComponent } from '../workout-list/workout-list.component';
import { WorkoutDetailsComponent } from '../workout-details/workout-details.component';

const routes: Routes = [
  { path: 'list', component: WorkoutListComponent },
  { path: 'add-new', component: WorkoutDetailsComponent },
  { path: '**', redirectTo: '/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WorkoutRoutingModule { }

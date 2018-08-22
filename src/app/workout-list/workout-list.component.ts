import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutService } from '../models/workout.service';
import { Workout } from '../models/workout';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  workouts: Workout[];
  selectedWorkout: Workout;
  title: string = 'Workouts Plan';

  constructor(private dataSource: WorkoutService,
    private router: Router) { }

  ngOnInit() {
    this.getWorkouts();
  }

  getWorkouts(): void {
    this.dataSource.getWorkoutList()
      .subscribe((list) => this.workouts = list,
        (err) => console.log(err),
        () => console.log('Workouts list loaded'));
  }// get all workouts from workout-service

  onSelectedWorkout(id: string): void {
    this.dataSource.getWorkoutById(id)
      .subscribe((workout) => this.selectedWorkout = workout,
        (err) => console.log(err),
        () => console.log('Workout loaded'));
  }// get workout id from workout-service

  deleteWorkout(id: string): void {
    //event.stopPropagation();
    this.dataSource.deleteWorkout(id)
      .subscribe((status) => {
        console.log(status)
        this.getWorkouts();
      },
        (err) => console.log(err),
        () => console.log('Workout deleted'));
  }//delete workout from workout-service

};

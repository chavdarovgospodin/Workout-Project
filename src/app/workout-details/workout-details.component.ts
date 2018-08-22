import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import { Workout } from '../models/workout';
import { WorkoutService } from '../models/workout.service';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrls: ['./workout-details.component.css']
})
export class WorkoutDetailsComponent implements OnInit {
  @Input('selected-workout') workout: Workout;
  @Output('workoutUpdated') workoutUpdated: EventEmitter<any> = new EventEmitter();
  addNewMode: boolean = false;

  constructor(private dataSource: WorkoutService,
    private router: Router,
    private location: Location) {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd && event.url === '/add-new') {
          this.workout = new Workout();
          this.addNewMode = true;
        }
        else {
          this.addNewMode = false;
        }
      })
  }

  ngOnInit() {
  }
  reload() {
    window.location.reload()
  }


  saveWorkout(): void {
    this.dataSource.saveWorkout(this.workout)
      .subscribe((workout) => {
        this.workout = workout
        this.workoutUpdated.emit()
      },
        (err) => console.log(err),
        () => console.log('add/update completed'));
    if (this.addNewMode === true) {
      this.router.navigate(['/list']);
      this.reload();
    }
  }//save workout -- workout-service

  goBack(): void {
    this.location.back();
  }

}

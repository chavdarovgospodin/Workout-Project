import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Workout } from './workout';
import { Observable } from 'rxjs';

const URL: string = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: HttpClient) { }

  getWorkoutList(): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${URL}/workout`);
  }//request workout list from server

  getWorkoutById(id: string): Observable<Workout> {
    return this.http.get<Workout>(`${URL}/workout/${id}`);
  }//request workout id from server

  deleteWorkout(id: string): Observable<any> {
    return this.http.delete(`${URL}/workout/${id}`);
  }// delete workout

  saveWorkout(workout: Workout): Observable<Workout> {
    //update workout
    if (workout._id) {
      return this.http.put<Workout>(`${URL}/workout/${workout._id}`, workout);
    }
    //create new workout
    else {
      workout._id = undefined;
      return this.http.post<Workout>(`${URL}/workout/`, workout);
    }
  }


}

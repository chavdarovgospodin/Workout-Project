import mongoose from 'mongoose';
import {
  WorkoutSchema
} from '../models';

const Workout = mongoose.model('Workout', WorkoutSchema);

//POST
export const addNewWorkout = (req, res) => {
  const newWorkout = new Workout(req.body);

  newWorkout
    .save()
    .then((workout) => res.json(workout))
    .catch((err) => res.json(err));
}; //add new workout

//GET
export const getWorkouts = (req, res) => {
  Workout
    .find({})
    .then((workouts) => res.json(workouts))
    .catch((err) => res.json(err));
}; // get all workouts

export const getWorkoutsById = (req, res) => {
  Workout
    .findOne({
      _id: req.params.workoutId
    })
    .then((workout) => res.json(workout))
    .catch((err) => res.json(err));
}; // get workouts by id


//PUT
export const updateWorkout = (req, res) => {
  Workout
    .findOneAndUpdate({
        _id: req.params.workoutId
      },
      req.body, {
        upsert: true,
        returnNewDocument: false
      })
    .then((workout) => res.json(workout))
    .catch((err) => res.json(err));
}; //update workout


//DELETE
export const deleteWorkout = (req, res) => {
  Workout
    .remove({
      _id: req.params.workoutId
    })
    .then((status) => res.json(status))
    .catch((err) => res.json(err));
}; //delete workout

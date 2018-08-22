import {
  addNewWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
  getWorkoutsById
} from '../controllers';

export const routes = (app) => {
  //GET
  app.route('/workout')
    .get((req, res, next) => {
      console.log(`Get all workouts ${req.url} ${req.method}`);
      next();

    }, getWorkouts)
    //POST
    .post((req, res, next) => {
      console.log(`Add new workout: ${JSON.stringify(req.body)}`)
      next();
    }, addNewWorkout);
  //PUT
  app.route('/workout/:workoutId')
    .get((req, res, next) => {
        console.log(`Get workout id: ${req.params.workoutId}`);
        next();
      },
      //GET by ID
      getWorkoutsById)
    .put((req, res, next) => {
      console.log(`Update workout Id:${req.params.workoutId}`);
      next();
    }, updateWorkout)
    //DELETE
    .delete((req, res, next) => {
      console.log(`Delete workout id:${req.params.workoutId}`);
      next();
    }, deleteWorkout);
};

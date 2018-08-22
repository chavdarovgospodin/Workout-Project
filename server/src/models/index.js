import mongoose from 'mongoose';

const Schema = mongoose.Schema;
//workout schema
export const WorkoutSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  exercises: {
    type: String,
    required: true
  }
  // exercises: {
  //     name:{
  //         type: String,
  //         required: true
  //     },
  //     description:{
  //         type: String,
  //         required: true
  //     },
  //     duration:{
  //         type: String,
  //         required: true
  //     },
  //     image: {
  //         type: String,
  //         required: true
  //     }
  // }
});

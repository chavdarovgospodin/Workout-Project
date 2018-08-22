import { WorkoutRoutingModule } from './workout-routing.module';

describe('WorkoutRoutingModule', () => {
  let workoutRoutingModule: WorkoutRoutingModule;

  beforeEach(() => {
    workoutRoutingModule = new WorkoutRoutingModule();
  });

  it('should create an instance', () => {
    expect(workoutRoutingModule).toBeTruthy();
  });
});

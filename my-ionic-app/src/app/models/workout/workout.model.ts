import { Exercise } from 'src/app/models/exercise/exercise.model';

export class Workout {
  name: string;
  id: string;
  roundReset: number; // Rest time between rounds in seconds or minutes
  rounds: number;
  rest: number; // Rest time between exercises
  exercises: Exercise[];

  constructor(
    id: string,
    name: string,
    roundReset: number,
    rounds: number,
    rest: number,
    exercises: Exercise[]
  ) {
    this.id = id;
    this.name = name;
    this.roundReset = roundReset;
    this.rounds = rounds;
    this.rest = rest;
    this.exercises = exercises;
  }
}

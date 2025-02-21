import { Workout } from 'src/app/models/workout/workout.model';
import { Exercise } from 'src/app/models/exercise/exercise.model';

// Mock exercises
const exercises: Exercise[] = [
  { id: '1', name: 'Push-ups', duration: 30 },
  { id: '2', name: 'Jump Squats', duration: 45 },
  { id: '3', name: 'Plank', duration: 60 },
  { id: '4', name: 'Burpees', duration: 30 },
  { id: '5', name: 'Mountain Climbers', duration: 40 },
];

// Mock workouts
export const MOCK_WORKOUTS: Workout[] = [
  {
    id: 'w1',
    name: 'Morning Energizer',
    rounds: 3,
    roundReset: 15,
    rest: 30,
    exercises: [exercises[0], exercises[1], exercises[2]],
  },
  {
    id: 'w2',
    name: 'Cardio Blast',
    rounds: 4,
    roundReset: 20,
    rest: 45,
    exercises: [exercises[3], exercises[4], exercises[1]],
  },
  {
    id: 'w3',
    name: 'Core Strength',
    rounds: 3,
    roundReset: 10,
    rest: 30,
    exercises: [exercises[2], exercises[0], exercises[4]],
  },
];

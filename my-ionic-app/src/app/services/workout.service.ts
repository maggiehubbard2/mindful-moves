import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Workout } from 'src/app/models/workout/workout.model';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private workouts: Workout[] = [];

  constructor(private router: Router) {
    this.loadWorkouts(); // Load stored workouts when the service initializes
  }

  addWorkout(workout: Workout) {
    this.workouts.push(workout);
    this.saveWorkouts(); // Save the updated list to localStorage
  }

  getWorkouts(): Workout[] {
    return this.workouts;
  }

  private saveWorkouts() {
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }

  private loadWorkouts() {
    const storedWorkouts = localStorage.getItem('workouts');
    if (storedWorkouts) {
      this.workouts = JSON.parse(storedWorkouts);
    }
  }

  goToAddWorkout() {
    this.router.navigate(['/add-workout']); 
  }

  goToWorkoutList(){
    this.router.navigate(['/workouts']); 
  }
}



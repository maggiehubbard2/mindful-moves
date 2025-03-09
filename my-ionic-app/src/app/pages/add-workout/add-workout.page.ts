import { Component } from '@angular/core';
import { Workout } from 'src/app/models/workout/workout.model';
import { Exercise } from 'src/app/models/exercise/exercise.model';
import { Router } from '@angular/router';
import { WorkoutService } from 'src/app/services/workout.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.page.html',
  styleUrls: ['./add-workout.page.scss'],
  standalone: false,
})
export class AddWorkoutPage {
  workout: Workout = {
    id: uuidv4(), // Can generate a temporary GUID if needed
    name: 'Name',
    rounds: 1,
    roundReset: 30,
    rest: 30,
    exercises: [],
  };

  newExercise: Exercise = { id: '', name: '', duration: 30 };

  constructor(private router: Router,
    private workoutService: WorkoutService
  ) {}

  addExercise() {
    if (this.newExercise.name.trim() && this.newExercise.duration > 0) {
      this.newExercise.id = this.generateId();
      this.workout.exercises.push({ ...this.newExercise });
      this.newExercise = { id: '', name: '', duration: 30 }; // Reset input fields
    }
  }

  removeExercise(index: number) {
    this.workout.exercises.splice(index, 1);
  }

  submitWorkout() {
    console.log('Workout Submitted:', this.workout);
    this.workoutService.addWorkout(this.workout);
    alert('Workout added successfully! (This is just a placeholder)');
    this.router.navigate(['/home']); // Redirect (or change this if needed)
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9); // Simple ID generator
  }

  exit() {
    this.router.navigate(['/home']); // Navigate back to home or another screen
  }
}

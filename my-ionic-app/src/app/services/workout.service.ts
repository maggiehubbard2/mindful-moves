import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Workout } from 'src/app/models/workout/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  workouts: Workout[] = [];

  constructor(private storage: Storage) {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
    this.loadWorkouts();
  }

  async addWorkout(workout: Workout) {
    this.workouts.push(workout);
    await this.saveWorkouts();
  }

  async saveWorkouts() {
    await this.storage.set('workouts', this.workouts);
  }

  async loadWorkouts() {
    const savedWorkouts = await this.storage.get('workouts');
    this.workouts = savedWorkouts ? savedWorkouts : [];
  }

}



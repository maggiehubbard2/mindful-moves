import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WorkoutService } from 'src/app/services/workout.service';


@Component({
  selector: 'app-workout-modal',
  templateUrl: './workout-modal.component.html',
  styleUrls: ['./workout-modal.component.scss'],
  standalone: false,
})
export class WorkoutModalComponent {
  workouts: any[] = [];

  constructor(private modalController: ModalController, private workoutService: WorkoutService) {}

  async ionViewWillEnter() {
    await this.workoutService.loadWorkouts();
    this.workouts = this.workoutService.workouts;
  }

  close() {
    this.modalController.dismiss();
  }
}

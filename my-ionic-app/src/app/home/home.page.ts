import { Component } from '@angular/core';
import { TimerService } from '../services/timer.service';
import { WorkoutService } from '../services/workout.service';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { WorkoutModalComponent } from '../modals/workout-modal/workout-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  timerDisplay: string = '00:00';

  constructor(public timerService: TimerService, 
              public workoutService: WorkoutService,
              private router: Router,
              private loadingCtrl: LoadingController,
              private modalController: ModalController
  ) {
    // Update timer display
    this.timerService.timerDisplay$.subscribe((display) => {
      this.timerDisplay = display;
    });
  }

  // Toggles between play and pause
  toggleTimer() {
    if (this.timerService.isRunning$.value) {
      this.timerService.stopTimer(); // Pause the timer
    } else {
      this.timerService.startTimer(); // Start the timer
    }
  }

  goToAddWorkout() {
    this.router.navigate(['/add-workout']); 
  }

  async goToMyWorkouts() {
    const modal = await this.modalController.create({
      component: WorkoutModalComponent,
      canDismiss: true,
      presentingElement: await this.modalController.getTop(),
    });

    return await modal.present();
  }

  
}

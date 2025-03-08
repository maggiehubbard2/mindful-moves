import { Component } from '@angular/core';
import { TimerService } from '../services/timer.service';
import { WorkoutService } from '../services/workout.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

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
              private loadingCtrl: LoadingController
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

  goToMyWorkouts(){
    this.workoutService.loadWorkouts()
  }

  
}

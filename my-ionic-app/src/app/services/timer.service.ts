import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private totalWorkTime = 30; // seconds
  private totalRestTime = 15; // seconds
  private timeLeft = this.totalWorkTime;

  timerDisplay$ = new BehaviorSubject<string>('00:30');
  isRunning$ = new BehaviorSubject<boolean>(false);
  isWorking$ = new BehaviorSubject<boolean>(true);
  currentRound$ = new BehaviorSubject<number>(1); // Track the current round
  private timerSubscription: any;

  rounds = 4; // Total number of rounds

  private workDurationSubject = new BehaviorSubject<number>(25 * 60); // Default: 25 minutes
  private restDurationSubject = new BehaviorSubject<number>(5 * 60); // Default: 5 minutes

  public workDuration$ = this.workDurationSubject.asObservable();
  public restDuration$ = this.restDurationSubject.asObservable();

  // Getters for current values
  get workDuration(): number {
    return this.workDurationSubject.value;
  }

  get restDuration(): number {
    return this.restDurationSubject.value;
  }

  // Setters to update values
  set workDuration(value: number) {
    this.workDurationSubject.next(value);
  }

  set restDuration(value: number) {
    this.restDurationSubject.next(value);
  }

  // Optional: Format both as MM:SS
  get workDurationFormatted(): string {
    return this.formatDuration(this.workDuration);
  }

  get restDurationFormatted(): string {
    return this.formatDuration(this.restDuration);
  }

  // Helper to format duration as MM:SS
  private formatDuration(duration: number): string {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }
  startTimer() {
    if (this.isRunning$.value) return;

    this.isRunning$.next(true);
    this.timerSubscription = setInterval(() => {
      this.timeLeft--;
      this.timerDisplay$.next(this.formatTime(this.timeLeft));

      if (this.timeLeft <= 0) {
        this.switchPhase();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerSubscription) {
      clearInterval(this.timerSubscription);
    }
    this.isRunning$.next(false);
  }

  resetTimer() {
    if (this.timerSubscription) {
      clearInterval(this.timerSubscription);
    }

    this.isRunning$.next(false);
    this.isWorking$.next(true);
    this.timeLeft = this.totalWorkTime;
    this.timerDisplay$.next(this.formatTime(this.timeLeft));
    this.currentRound$.next(1);
  }

  private switchPhase() {
    if (this.isWorking$.value) {
      this.isWorking$.next(false);
      this.timeLeft = this.totalRestTime;
    } else {
      this.isWorking$.next(true);
      this.timeLeft = this.totalWorkTime;

      // Increment the round
      this.currentRound$.next(this.currentRound$.value + 1);
    }
    this.timerDisplay$.next(this.formatTime(this.timeLeft));
  }

  private formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${this.pad(minutes)}:${this.pad(remainingSeconds)}`;
  }

  private pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }


}

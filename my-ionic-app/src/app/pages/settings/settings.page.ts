import { Component } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true, // Ensure standalone is true
  imports: [IonicModule, FormsModule], // Import IonicModule
  templateUrl: 'settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  constructor(public timerService: TimerService) {}

  saveSettings() {
    // Logic for saving settings (can use local storage for persistence)
  }
}

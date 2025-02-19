import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true, // Make it standalone
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [IonicModule, CommonModule], // Import IonicModule
})
export class MenuComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  goToWorkouts(){
    this.router.navigate(['/workouts']);
  }

  
}

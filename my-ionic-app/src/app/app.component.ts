import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private router: Router, private menuCtrl: MenuController) {}

  async goToHome() {
    await this.router.navigate(['/home']); // Navigate to Home
    this.menuCtrl.close(); // Close the menu
  }

  async goToSettings() {
    await this.router.navigate(['/settings']); // Navigate to Settings
    this.menuCtrl.close(); // Close the menu
  }
}

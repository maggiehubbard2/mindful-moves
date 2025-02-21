import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getRandomPositiveMessage } from 'src/app/data/positive-messages';
import { IonicModule, MenuController, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true, // Make it standalone
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [IonicModule, CommonModule], // Import IonicModule
})
export class MenuComponent {
  constructor(private router: Router, private menuCtrl: MenuController, private toastController: ToastController) {}

  goToPage(pageName: string){
    this.router.navigate([pageName]);
    this.menuCtrl.close();
  }

  async presentPositiveMessage() {
    const message = getRandomPositiveMessage();
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'middle',
    });
    toast.present();
  }


}

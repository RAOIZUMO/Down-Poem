import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular'; // IonicModule をインポート

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule] // IonicModule を使用して必要なコンポーネントを提供
})
export class LogInPage implements OnInit {

  alertButtons = [
    {
      text: 'OK',
      handler: () => {
        console.log('OK clicked');
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }
  ];

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'This is an alert message.',
      buttons: this.alertButtons
    });

    await alert.present();
  }
}

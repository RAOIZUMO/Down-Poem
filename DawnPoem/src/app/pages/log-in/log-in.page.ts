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

  constructor() { }

  ngOnInit() {
  }
  
}

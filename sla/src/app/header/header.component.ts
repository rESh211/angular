import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true
})


export class HeaderComponent {
  // Метод для скачивания каталога
  sendMessage() {
    alert("HELLO"); 
    // Здесь можно добавить логику скачивания файла
  }

  // Метод для заказа звонка
  requestCall() {
    alert("Заказ звонка"); 
    // Здесь можно добавить логику обратного звонка
  }
}


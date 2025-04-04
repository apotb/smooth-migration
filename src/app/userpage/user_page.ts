import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './user_page.html',
  //styleUrls: ['./SOMETHING.scss'],
})
export class UserPage {
  items: string[];

  constructor() {
    // Create 10 placeholder items labeled "Placeholder 1", "Placeholder 2", etc.
    this.items = Array.from({ length: 10 }, (_, i) => `Placeholder ${i + 1}`);
  }

  onItemClick(item: string): void {
    console.log('Item clicked:', item);
  }
}
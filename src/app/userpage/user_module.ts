import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UserPageRoutingModule } from './routing';
import { UserPage } from './user_page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    UserPageRoutingModule,
    UserPage  // Import the standalone component here
  ]
})
export class UserPageModule {}
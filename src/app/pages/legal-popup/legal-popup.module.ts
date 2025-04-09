import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegalPopupPageRoutingModule } from './legal-popup-routing.module';

import { LegalPopupPage } from './legal-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegalPopupPageRoutingModule,
    LegalPopupPage,
  ],
})
export class LegalPopupPageModule {}

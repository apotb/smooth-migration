import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegalPopupPage } from './legal-popup.page';

const routes: Routes = [
  {
    path: '',
    component: LegalPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalPopupPageRoutingModule {}

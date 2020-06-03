import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegendsOfTomorrowPage } from './legends-of-tomorrow.page';

const routes: Routes = [
  {
    path: '',
    component: LegendsOfTomorrowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegendsOfTomorrowPageRoutingModule {}

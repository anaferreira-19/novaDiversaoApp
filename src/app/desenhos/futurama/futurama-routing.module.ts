import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuturamaPage } from './futurama.page';

const routes: Routes = [
  {
    path: '',
    component: FuturamaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuturamaPageRoutingModule {}

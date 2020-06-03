import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuturamaPageRoutingModule } from './futurama-routing.module';

import { FuturamaPage } from './futurama.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuturamaPageRoutingModule
  ],
  declarations: [FuturamaPage]
})
export class FuturamaPageModule {}

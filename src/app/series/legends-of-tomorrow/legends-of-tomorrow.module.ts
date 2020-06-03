import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegendsOfTomorrowPageRoutingModule } from './legends-of-tomorrow-routing.module';

import { LegendsOfTomorrowPage } from './legends-of-tomorrow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegendsOfTomorrowPageRoutingModule
  ],
  declarations: [LegendsOfTomorrowPage]
})
export class LegendsOfTomorrowPageModule {}

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KatalogePage } from './kataloge.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { KatalogePageRoutingModule } from './kataloge-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    KatalogePageRoutingModule
  ],
  declarations: [KatalogePage]
})
export class KatalogePageModule {}

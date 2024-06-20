import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UebersichtPage} from './uebersicht.page';

import {UebersichtPageRoutingModule} from './uebersicht-routing.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        UebersichtPageRoutingModule
    ],
    declarations: [UebersichtPage]
})
export class UebersichtPageModule {
}

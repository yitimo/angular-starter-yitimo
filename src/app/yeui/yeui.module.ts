import { NgModule } from '@angular/core';
import { SharedModule } from '../-shared';
import { DefaultComponent } from './default';
import { YeuiService } from './yeui.service';
import { YeuiComponent } from './yeui.component';
import { YeuiRoutingModule } from './yeui.route';
import { HomeComponent } from './home';
import { PopupComponent } from './popup';
import { InputsComponent } from './inputs';
import { ButtonsComponent } from './buttons';
import { CustomComponent } from './popup';

@NgModule({
    declarations: [
        YeuiComponent,
        HomeComponent,
        PopupComponent,
        CustomComponent,
        InputsComponent,
        ButtonsComponent
    ],
    imports: [ SharedModule, YeuiRoutingModule ],
    exports: [],
    providers: [
        YeuiService
    ],
    entryComponents: [CustomComponent]
})
export class YeuiModule {}

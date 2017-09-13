import { NgModule } from '@angular/core';
import { SharedModule } from '../-shared';
import { DefaultComponent } from './default';
import { YeuiService } from './yeui.service';
import { YeuiComponent } from './yeui.component';
import { YeuiRoutingModule } from './yeui.route';
import { HomeComponent } from './home';
import { PopupComponent } from './popup';
import { InputComponent } from './input';
import { ButtonsComponent } from './buttons';

@NgModule({
    declarations: [
        YeuiComponent,
        HomeComponent,
        PopupComponent,
        InputComponent,
        ButtonsComponent
    ],
    imports: [ SharedModule, YeuiRoutingModule ],
    exports: [],
    providers: [
        YeuiService
    ],
})
export class YeuiModule {}

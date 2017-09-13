import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { YeuiComponent } from './yeui.component';
import { HomeComponent } from './home';
import { InputsComponent } from './inputs';
import { ButtonsComponent } from './buttons';
import { PopupComponent } from './popup';

const routes: Routes = [
    {
        path: 'yeui',
        component: YeuiComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'inputs', component: InputsComponent },
            { path: 'buttons', component: ButtonsComponent },
            { path: 'popup', component: PopupComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YeuiRoutingModule {}

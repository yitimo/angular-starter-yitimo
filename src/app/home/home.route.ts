import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { DefaultComponent } from './default';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: '', component: DefaultComponent },
            { path: 'default', component: DefaultComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}

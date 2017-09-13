import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './notfound';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '**',
                component: NotFoundComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class WildcardRoutingModule { }

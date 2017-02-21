import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectiveComponent } from './directive.component';
import { DirectiveHomeComponent } from './home/directive-home.component';

const routes: Routes = [
    {
        path: '', component: DirectiveComponent, children: [
            { path: 'home', component: DirectiveHomeComponent }
        ]
    },
    { path: '**', component: DirectiveHomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class DirectiveRoutingModule { }

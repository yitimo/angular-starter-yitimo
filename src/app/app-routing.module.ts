import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectiveModule } from './directive/directive.module';

const routes: Routes = [
    { path: 'directive', loadChildren: './directive/directive.module#DirectiveModule' },
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [ ],
    providers: [ ]
})
export class AppRoutingModule { }

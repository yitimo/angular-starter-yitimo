import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotfoundComponent } from './notfound.component';

const routes: Routes = [
  { path: 'path', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [NotfoundComponent]
})
export class NotfoundModule { }

export const routedComponents = [NotfoundComponent];

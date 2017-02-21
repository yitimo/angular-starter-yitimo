import { NgModule } from '@angular/core';
import { DirectiveRoutingModule } from './directive-routing.module';
import { DirectiveComponent } from './directive.component';
import { DirectiveHomeComponent } from './home/directive-home.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [ DirectiveRoutingModule, SharedModule ],
    exports: [],
    declarations: [
        DirectiveComponent,
        DirectiveHomeComponent
    ],
    providers: [],
})
export class DirectiveModule { }

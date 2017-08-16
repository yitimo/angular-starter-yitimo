import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default';
import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.route';

@NgModule({
    declarations: [ HomeComponent, DefaultComponent ],
    imports: [ CommonModule, HomeRoutingModule ],
    exports: [],
    providers: [HomeService],
})
export class HomeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlideImgComponent } from './slide-img/slide-img.component';
import { SwipeDirective } from './swipe.directive';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    exports: [
        SlideImgComponent,
        SwipeDirective,
        CommonModule,
        FormsModule
    ],
    declarations: [
        SlideImgComponent,
        SwipeDirective
    ],
    providers: [],
})
export class SharedModule { }

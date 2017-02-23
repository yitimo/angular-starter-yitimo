import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlideImgComponent } from './slide-img/slide-img.component';
import { SwipeDirective } from './swipe.directive';
import { TimePipe } from './time.pipe';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    exports: [
        SlideImgComponent,
        SwipeDirective,
        CommonModule,
        FormsModule,
        TimePipe
    ],
    declarations: [
        SlideImgComponent,
        SwipeDirective,
        TimePipe
    ],
    providers: [],
})
export class SharedModule { }

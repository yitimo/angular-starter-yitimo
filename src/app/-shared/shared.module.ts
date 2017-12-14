import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [ CommonModule, ReactiveFormsModule, FormsModule ],
    exports: [ CommonModule, ReactiveFormsModule, FormsModule ],
    providers: [],
})
export class SharedModule {}

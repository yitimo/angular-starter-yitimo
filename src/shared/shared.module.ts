import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule, MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule, ReactiveFormsModule, MatButtonModule,
        MatToolbarModule
    ],
    exports: [
        CommonModule, ReactiveFormsModule, MatButtonModule,
        MatToolbarModule
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }

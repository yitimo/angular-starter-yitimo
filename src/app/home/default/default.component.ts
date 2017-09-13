import { Component, OnInit } from '@angular/core';
import { YUPService } from 'yeui';

@Component({
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.css']
})
export class DefaultComponent {
    constructor(
        private yup: YUPService
    ) {
        //
    }


}

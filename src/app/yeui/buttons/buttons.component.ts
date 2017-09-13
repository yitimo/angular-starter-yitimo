import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
    constructor() {
        //
    }

    public ngOnInit() {
        //
    }

    public test() {
        console.log('clicked !');
    }
}

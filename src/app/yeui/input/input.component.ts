import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
    constructor() {
        //
    }

    public ngOnInit() {
        //
    }

    public logSaid(e: any) {
        console.log(e.target.value);
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './inputs.component.html',
    styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
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

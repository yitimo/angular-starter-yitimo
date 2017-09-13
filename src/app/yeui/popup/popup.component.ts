import { Component, OnInit } from '@angular/core';
import { YUPService } from 'yeui';

@Component({
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
    constructor(
        public yup: YUPService
    ) {
        //
    }

    public ngOnInit() {
        //
    }

    public Alert() {
        this.yup.Alert({msg: '弹弹弹', title: '我弹'});
    }

    public Dialog() {
        this.yup.Dialog({msg: '弹不弹?', title: '我弹', okStr: '弹弹', noStr: '别弹了'});
    }

    public Toast() {
        this.yup.Toast({msg: '突突突 !'});
    }

    public Load() {
        this.yup.Load({msg: '等着 !'});
        window.setTimeout(() => {
            this.yup.Loaded();
        }, 2000);
    }
}

import { Component, OnInit } from '@angular/core';
import { SlideImg } from '../../shared/slide-img/slide-img.interface';

@Component({
    templateUrl: 'directive-home.component.html',
    styleUrls: ['directive-home.component.css']
})
export class DirectiveHomeComponent {
    public imgs: SlideImg[];
    constructor() {
        this.imgs = [{Url: '/assets/img/628C7A70.jpg'},
        {Url: '/assets/img/2219A91D.jpg'},
        {Url: '/assets/img/04262CC3.jpg'},
        {Url: '/assets/img/336076CD.jpg'},
        {Url: '/assets/img/58DCA083.jpg'}];
    }
}

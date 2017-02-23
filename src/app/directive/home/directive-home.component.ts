import { Component, OnInit } from '@angular/core';
import { SlideImg } from '../../shared/slide-img/slide-img.interface';
import { AudioService } from '../../audio/audio.service';

@Component({
    templateUrl: 'directive-home.component.html',
    styleUrls: ['directive-home.component.css']
})
export class DirectiveHomeComponent {
    public imgs: SlideImg[];
    constructor(public audio: AudioService) {
        this.imgs = [{Url: '/assets/img/628C7A70.jpg'},
        {Url: '/assets/img/2219A91D.jpg'},
        {Url: '/assets/img/04262CC3.jpg'},
        {Url: '/assets/img/336076CD.jpg'},
        {Url: '/assets/img/58DCA083.jpg'}];

        audio.Add({Url: '/assets/audio/唐人街.mp3', Title: '唐人街-林宥嘉',
        Cover: '/assets/img/2219A91D.jpg'});
        audio.Add({Url: '/assets/audio/自然醒.mp3', Title: '自然醒-林宥嘉',
        Cover: '/assets/img/336076CD.jpg'});
    }
}

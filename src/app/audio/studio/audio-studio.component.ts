import { Component, OnInit, ViewEncapsulation, Input,
trigger, animate, transition, state, style, HostListener } from '@angular/core';
import { AudioService } from '../audio.service';
import { Audio } from '../audio.model';
import { PlayData } from '../play-data.model';

@Component({
    selector: 'audio-studio',
    styleUrls: ['audio-studio.component.css'],
    templateUrl: 'audio-studio.component.html',
    animations: [
        trigger('studioDisp', [
            state('void', style({ top: '-100%' })),
            state('*', style({ top: 0 })),
            state('on', style({ top: 0, height: '100%' })),
            state('off', style({ top: 0, height: '0.5rem' })),
            transition('void => off', [animate('0.3s ease-in', style({top: '-100%'}))]),
            transition('off => void', [animate('0.3s ease-out', style({top: 0}))]),
            transition('on => void', [animate('0.3s ease-out', style({top: 0}))]),
            transition('off => on', [animate('0.3s ease-in', style({top: 0, height: '100%'}))]),
            transition('on => off', [animate('0.3s ease-out', style({top: 0, height: '0.5rem'}))])
        ])
    ]
})
export class AudioStudioComponent implements OnInit {

    public playList: Audio[];
    public playData: PlayData;
    public audios: Audio[];
    public disp;

    private touchStart;
    private touchEnd;

    constructor(public audio: AudioService) {
        this.disp = 'off';
    }

    public ngOnInit() {
        this.playList = this.audio.PlayList();
        this.playData = this.audio.PlayData();
    }

    public audioSwiped(e) {
        console.log(e);
        switch (e) {
            case 'up':
                this.disp = 'off';
                return;
            case 'down':
                this.disp = 'on';
                return;
            default:
                return;
        }
    }

    public Skip(e) {
        this.audio.Skip(e.layerX /
        document.getElementById('audio-total').getBoundingClientRect().width);
    }
}

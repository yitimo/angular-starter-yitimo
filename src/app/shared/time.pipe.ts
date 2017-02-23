import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myTime'
})

export class TimePipe implements PipeTransform {
    public transform(value: number): any {
        let total = value || 0;
        let min = Math.floor(total / 60);
        let sec = Math.floor(total % 60);
        return (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec);
    }
}

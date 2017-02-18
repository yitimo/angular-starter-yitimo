import {
    Component, OnInit, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello World!</h1>`,
})
export class AppComponent implements OnInit {

    public ngOnInit() {
        console.log('load app.component');
    }
}

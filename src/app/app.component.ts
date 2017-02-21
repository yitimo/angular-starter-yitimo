import {
    Component, OnInit, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {

    public ngOnInit() {
        console.log('load app.component');
    }
}

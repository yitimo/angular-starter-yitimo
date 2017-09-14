import {
    Component, OnInit, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  public ngOnInit() {
    //
  }
}

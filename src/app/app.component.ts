import {
    Component, OnInit, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <router-outlet></router-outlet>
    <yup></yup>
  `,
})
export class AppComponent implements OnInit {
  public ngOnInit() {
    //
  }
}

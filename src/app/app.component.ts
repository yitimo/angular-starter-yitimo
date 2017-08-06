import {
    Component, OnInit, ViewEncapsulation
} from '@angular/core';
import { YUPService } from 'yeui';

@Component({
  selector: 'app',
  template: `
    Hello~
    <yup></yup>
  `,
})
export class AppComponent implements OnInit {
  constructor(
    private yup: YUPService
  ) {}
  public ngOnInit() {
    this.yup.Alert({msg: '你好啊~', title: '来自yeui的消息'});
  }
}

import { Component, Input, Inject, Injector, ViewContainerRef, ComponentRef, Self, ViewEncapsulation } from '@angular/core';
import { DialogRef, DIALOG_DATA } from 'yeui';

@Component({
    template: `
        <h3>我是自定义弹窗，会被动态插入，我还可以装填数据，比如说: {{data}}</h3>
        <span (click)="close()">关闭</span>
    `
})
export class CustomComponent {
    constructor(
        @Inject(DIALOG_DATA) public data: any,
        private dialog: DialogRef<any>
    ) {
        //
    }
    public close() {
        this.dialog.close('我这个数据会被推到外面去');
    }
}

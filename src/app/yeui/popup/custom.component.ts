import { Component, Input, Inject, Injector, ViewContainerRef, ComponentRef, Self, ViewEncapsulation } from '@angular/core';
import { YupRef, YUP_DATA } from 'yeui';

@Component({
    template: `
        <div class="body">
            <h3>我是自定义弹窗，会被动态插入，我还可以装填数据，比如说: {{data}}</h3>
            <span (click)="close()">关闭</span>
        </div>
        `,
    styles: [`
        .body{
            color: #cd5c5c;
            position: fixed;
            height: 200px;width: 300px;
            z-index: 10;top: 10%;left: 50%;margin-left: -150px;
            background: #ffffff;padding: 10px;border-radius: 3px;
        }
    `]
})
export class CustomComponent {
    public data: string;
    public dialogRef: YupRef<CustomComponent>;
    constructor(
        private injector: Injector
    ) {
        this.data = this.injector.get(YUP_DATA);
        this.dialogRef = this.injector.get(YupRef);
    }
    public close() {
        this.dialogRef.close('我这个数据会被推到外面去');
    }
}

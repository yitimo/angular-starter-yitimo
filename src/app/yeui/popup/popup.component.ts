import { Component, OnInit } from '@angular/core';
import { Yup, LoadRef } from 'yeui';
import { CustomComponent } from './custom.component';

@Component({
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
    private loadRef: LoadRef<any>;
    constructor(
        public yup: Yup
    ) {
        //
    }

    public ngOnInit() {
        //
    }

    public Alert() {
        this.yup.alert({body: '弹不弹?', title: '我弹', ok: '弹弹弹'}).afterClose().subscribe((res) => {
            console.log('弹完了');
        });
    }

    public Dialog() {
        this.yup.dialog({body: '弹不弹?', title: '我弹', ok: '弹弹', no: '别弹了', background: 'mask'}).afterClose().subscribe((res) => {
            if (res) {
                console.log('点击了确定');
            } else {
                console.log('点击了取消');
            }
        });
    }

    public Toast() {
        this.yup.toast({body: '弹一个！', duration: 1000});
    }

    public Load() {
        this.loadRef = this.yup.load({body: '正在', type: 'load', background: 'transition'});
        setTimeout(() => {
            this.loadRef.close();
        }, 1000);
    }

    public Custom() {
        this.yup.custom(CustomComponent, {data: '自定义数据', background: 'mask'}).afterClose().subscribe((res) => {
            console.log(`我已经被关闭了，不过我能携带出来数据: 【${res}】`);
        });
    }
}

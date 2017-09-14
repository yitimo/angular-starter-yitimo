import { Component, OnInit } from '@angular/core';
import { Yup } from 'yeui';
import { CustomComponent } from './custom.component';

@Component({
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
    constructor(
        public yup: Yup
    ) {
        //
    }

    public ngOnInit() {
        //
    }

    public Alert() {
        this.yup.alert({msg: '弹不弹?', title: '我弹', ok: '弹弹弹'}).afterClose().subscribe((res) => {
            console.log('弹完了');
        });
    }

    public Dialog() {
        this.yup.dialog({msg: '弹不弹?', title: '我弹', ok: '弹弹', no: '别弹了', mask: true}).afterClose().subscribe((res) => {
            if (res) {
                console.log('点击了确定');
            } else {
                console.log('点击了取消');
            }
        });
    }

    public Toast() {
        this.yup.toast({msg: '弹一个！', duration: 1000});
    }

    public Load() {
        this.yup.load({msg: '正在'});
        setTimeout(() => {
            this.yup.load({msg: '弹好了!', type: 'success', duration: 1000});
        }, 1000);
    }

    public Custom() {
        this.yup.open(CustomComponent, '我是自定义数据').afterClose().subscribe((res) => {
            console.log(`我已经被关闭了，不过我能携带出来数据: 【${res}】`);
        });
    }

    public Loaded() {
        this.yup.loaded();
    }
}

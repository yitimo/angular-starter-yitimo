import { Injectable } from '@angular/core';
import { Audio } from './audio.model';
import { PlayData } from './play-data.model';

/**
 * 音频服务，只关心播放列表控制与进度控制
 * 不提供组件支持，只提供列表控制方法接口及进度控制接口
 */
@Injectable()
export class AudioService {
    // 主音频标签
    private _audio: HTMLAudioElement;
    // 当前列表中的音频
    private playList: Audio[];
    // 当前播放的数据
    private playData: PlayData;
    private listenInterval;
    /**
     * 创建新的音频标签
     */
    constructor() {
        this._audio = document.createElement('audio');
        this._audio.autoplay = false;
        this._audio.onplay = () => {
            let that = this;
            this.listenInterval = window.setInterval(() => {
                that.playData.Current = that._audio.currentTime;
                that.playData.Url = that._audio.src;
                that.playData.During = that._audio.duration;
                that.playData.Data = that._audio.buffered &&
                    that._audio.buffered.length ?
                    (that._audio.buffered.end(0) || 0) :
                    0;
            }, 1000);
            this.playData.IsPlaying = true;
        };
        this._audio.onended = () => {
            window.clearInterval(this.listenInterval);
            this.FillPlayData();
            this.playData.IsPlaying = false;
        };
        this._audio.onabort = () => {
            window.clearInterval(this.listenInterval);
            this.playData.Current = this._audio.currentTime;
            this.playData.Url = this._audio.src;
            this.playData.During = this._audio.duration;
            this.playData.Data = this._audio.buffered &&
                this._audio.buffered.length ?
                (this._audio.buffered.end(0) || 0) :
                0;
            this.playData.IsPlaying = false;
        };
        this._audio.onpause = () => {
            window.clearInterval(this.listenInterval);
            this.playData.Current = this._audio.currentTime;
            this.playData.Url = this._audio.src;
            this.playData.During = this._audio.duration;
            this.playData.Data = this._audio.buffered &&
                this._audio.buffered.length ?
                (this._audio.buffered.end(0) || 0) :
                0;
            this.playData.IsPlaying = false;
        };
        this.playData = { Style: 0, Index: 0 };
        this.playList = [];
    }

    /**
     * 1.列表中无此音频则添加并播放
     * 2.列表中存在此音频但未播放则播放
     * 3.列表中存在此音频且在播放则暂停
     * @param audio
     */
    public Toggle(audio?: Audio): void {
        let tryGet = audio ?
            this.playList.findIndex((p) => p.Url === audio.Url) :
            this.playData.Index;
        if (tryGet < 0) {
            this.playList.push(audio);
            this.PlayIndex(this.playList.length);
        } else {
            if (tryGet === this.playData.Index) {
                if (this._audio.paused) {
                    this._audio.play();
                    this.playData.IsPlaying = true;
                } else {
                    this._audio.pause();
                    this.playData.IsPlaying = false;
                }
            } else {
                this.PlayIndex(tryGet);
            }
        }
    }

    /**
     * 若列表中无此音频则添加到列表的最后
     * 若列表中无音频则添加后并播放
     * @param audio
     */
    public Add(audio: Audio): void {
        this.playList.push(audio);
        if (this.playList.length === 1) {
            this.PlayIndex(0);
        }
    }

    /**
     * 移除列表中指定索引的音频
     * 若移除的就是正在播放的音频则自动播放新的同索引音频，不存在此索引则递减
     * 若只剩这一条音频了则停止播放并移除
     * @param index
     */
    public Remove(index: number): void {
        this.playList.splice(index, 1);
        if (!this.playList.length) {
            this._audio.src = '';
        } else {
            this.PlayIndex(index);
        }
    }

    /**
     * 下一曲
     */
    public Next(): void {
        switch (this.playData.Style) {
            case 0:
                if (this.playData.Index < this.playList.length) {
                    this.playData.Index++;
                    this.PlayIndex(this.playData.Index);
                }
                break;
            case 1:
                this.playData.Index = (this.playData.Index + 1) % this.playList.length;
                this.PlayIndex(this.playData.Index);
                break;
            case 2:
                this.playData.Index = (this.playData.Index + 1) % this.playList.length;
                this.PlayIndex(this.playData.Index);
                console.log('暂不考虑随机播放将视为列表循环播放');
                break;
            case 3:
                this._audio.currentTime = 0;
                break;
            default:
                if (this.playData.Index < this.playList.length) {
                    this.playData.Index++;
                    this.PlayIndex(this.playData.Index);
                }
                break;
        }
    }

    /**
     * 上一曲
     */
    public Prev(): void {
        switch (this.playData.Style) {
            case 0:
                if (this.playData.Index > 0) {
                    this.playData.Index--;
                    this.PlayIndex(this.playData.Index);
                }
                break;
            case 1:
                this.playData.Index = (this.playData.Index - 1) < 0 ?
                    (this.playList.length - 1) :
                    (this.playData.Index - 1);
                this.PlayIndex(this.playData.Index);
                break;
            case 2:
                this.playData.Index = (this.playData.Index - 1) < 0 ?
                    (this.playList.length - 1) :
                    (this.playData.Index - 1);
                this.PlayIndex(this.playData.Index);
                console.log('暂不考虑随机播放将视为列表循环播放');
                break;
            case 3:
                this._audio.currentTime = 0;
                break;
            default:
                if (this.playData.Index > 0) {
                    this.playData.Index--;
                    this.PlayIndex(this.playData.Index);
                }
                break;
        }
    }

    /**
     * 将当前音频跳转到指定百分比进度处
     * @param percent
     */
    public Skip(percent: number): void {
        this._audio.currentTime = this._audio.duration * percent;
        this.playData.Current = this._audio.currentTime;
    }

    public PlayList(): Audio[] {
        return this.playList;
    }

    public PlayData(): PlayData {
        return this.playData;
    }

    /**
     * 用于播放最后强行填满进度条
     * 防止播放进度偏差导致的用户体验
     */
    private FillPlayData(): void {
        this.playData.Current = this._audio.duration;
        this.playData.Data = this._audio.duration;
    }

    /**
     * 尝试播放指定索引的音频
     * 索引不存在则尝试递增播放，又失败则递减播放，又失败则失败
     * @param index
     */
    private PlayIndex(index: number): void {
        index = this.playList[index] ? index :
            this.playList[index + 1] ? (index + 1) :
                this.playList[index - 1] ? (index - 1) : -1;
        if (index !== -1) {
            this._audio.src = this.playList[index].Url;
            if (this._audio.paused) {
                this._audio.play();
                this.playData.IsPlaying = true;
            }
            this.playData.Index = index;
        } else {
            console.log('nothing to be play');
        }
    }
}

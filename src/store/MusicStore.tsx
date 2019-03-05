import { observable, action, computed } from 'mobx';
import api from '../api/api'

export class MusicStore {
    //当前播放歌曲信息
    @observable
    public songInfos = {
        id: '',
        name: '',
        coverImg: '',
        url: '',
        artists: '',
        album: ''
      };

    //播放状态
    @observable
    public playState = {
        isPlaying: false,
        playingTime: 0
    };

    // 播放列表
    @observable
    public playList = {
        currIndex: 0,
        list: []
    };

    //获取歌曲信息
    @action
    public getSongUrl = async (id: number) => {
        const res = await api.songUrl(id);
        this.songInfos = res.data[0]; 
    }

    //更换播放索引
    @action
    public changePlayIndex = () => {

    };
}

export default new MusicStore();



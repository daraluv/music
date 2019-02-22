import { observable, action, computed } from 'mobx';
import api from '../api/api'

export class MusicStore {
    @observable
    public songInfos:any= ['1'];

    @action
    public getSongUrl = async () => {
        const res = await api.songUrl();
        console.log(res);
        this.songInfos = res;
    }
}

  export default new MusicStore();



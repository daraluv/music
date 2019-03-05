import { observable, action, computed } from 'mobx';
import api from '../api/api'

export class LoginStore {
    //用户信息
    @observable
    public userInfos = {
        id: '',
    };

    //请求登录
    @action
    public goLogin = () => {

    };

    //退出登录
    @action
    public loginOut = () => {

    };
}

export default new LoginStore();



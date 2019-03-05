import http from "../utils/http";
import host from "../utils/host";

const NETEASE_API= {
    login:(email: any, password: any)=> http.get(`${host}/login?email=${email}&password=${password}`),
    bannerList: () => http.get(`${host}/banner`), // 轮播图
    recommendList: () => http.get(`${host}/personalized`), // 推荐歌单
    radioList:() => http.get(`${host}/personalized/djprogram`), 
    playlist:(id: number) => http.get(`${host}/playlist/detail?id=${id}`),
    // 歌曲URL
    songUrl:(id: number) => http.get(`${host}/song/url?id=${id}`), 
    // 歌曲详情
    songDetail: {
      path: '/song/detail?ids=:ids'
    },
    // 歌曲 URL 
    songUrlBackUp: {
      path: 'http://music.163.com/song/media/outer/url?id=:id.mp3'
    },
    // 排行榜
    list: {
      path: '/top/list?idx=:idx'
    }
  }

  export default NETEASE_API

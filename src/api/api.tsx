import http from "../utils/http";
import host from "../utils/host";

const NETEASE_API= {
    bannerList: () => http.get(`${host}/banner`), // 轮播图
    recommendList: () => http.get(`${host}/personalized`), // 推荐歌单
    recommendSong: '/personalized/newsong', // 推荐歌曲
    // 歌单详情
    playlist: {
      path: '/playlist/detail?id=:id'
    },
    // 歌曲URL
    songUrl: {
      path: '/music/url?id=:ids'
    },
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

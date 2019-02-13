import axios from 'axios'
import {createError,createHandleError} from './handleError'

// axios 配置
const service = axios.create({
    baseURL: '/', // 配置API接口地址
  })

service.interceptors.request.use(config=> {
    return config;
}, err=> {
    console.log('请求超时')
    return Promise.resolve(err);
})


service.interceptors.response.use(response => {
    let data = response.data;
 
    if(data) {
      if(data.code != 1 ){
        return createError(response)
      }
 
      //不理解这里的处理
      if(Object.prototype.hasOwnProperty.call(data,'data')){
         data.status = response.status;
         return data;
      }
      
      return response
    }
 
   }, error => {
        return createHandleError(error)
   }
 )
 
 
export default service
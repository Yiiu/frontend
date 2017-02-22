import axios from 'axios'
import config from 'config'

let instance = axios.create({
  baseURL: config.host,
  withCredentials: config.withCredentials  //  跨域传递cookie
})

/*  请求拦截  */
instance.interceptors.request.use((req) => {
  req.headers.Authorization = 'Bear abcdefghijklmn'
  return req
})

/*  响应拦截  */
instance.interceptors.response.use(
(res) => res.data,
(err) => {
  let { status, data } = err.response
  if (status === 404) {
    console.log('没有此接口/(ㄒoㄒ)/~~')
  }
  return Promise.reject(data)
})

export default instance

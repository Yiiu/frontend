import axios from 'axios'
import * as qs from 'qs'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

let instance = axios.create({
  validateStatus (status: number) {
    return status < 500 && status !== 404
  }
})

instance.interceptors.response.use(
  response => {
    if (response.status === 401) {
      history.push('/SignIn')
      return Promise.reject(response)
    } else if (response.status >= 400) {
      return Promise.reject(response)
    } else {
      return Promise.resolve(response)
    }
  },
  error =>
    Promise.reject(error)
)
export const token = async<T> (data: any) => {
  return await axios.request<T>({
    url: '/oauth/token',
    method: 'post',
    headers: {
      'Authorization': 'Basic OTcxMDUxNzYwOTA3YzMyNzo5NzA1ZWI3YWMyYzk4NDAz',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data),
  })
}
export default instance
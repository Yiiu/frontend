import axios from 'axios'
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
export default instance
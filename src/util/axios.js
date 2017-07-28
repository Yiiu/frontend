import axios from 'axios'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

let instance = axios.create({
  validateStatus (status) {
    return status < 500 && status !== 404
  }
})
instance.interceptors.response.use(
  response => {
    if (response.status === 401) {
      history.push('/account/SignIn')
      return Promise.reject(response.data)
    } else if (response.status >= 400) {
      return Promise.reject(response.data)
    } else {
      return Promise.resolve(response.data)
    }
  },
  error =>
    Promise.reject(error)
)
export default instance

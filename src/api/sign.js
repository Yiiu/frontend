import axios from './http'

/**
 * 登陆（测试）
 * @param  {String} options.username 用户名
 * @param  {String} options.password 密码
 * @return {Null}
 */
const login = ({username, password}) => {
  axios.post('/login', {
    username,
    password
  })
}

export default {
  login
}

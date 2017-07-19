import axios from 'axios'

export function SignInRemote (data) {
  return () => axios.post('/api/signin', data)
}

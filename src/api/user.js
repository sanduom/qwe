import { request } from '../utils/request'

export const requestLogin = params => {
  return request('/api/user/login', params).then(data=>{
      localStorage.setItem('user-token',JSON.stringify(data.token))
  })
}
export const requestRegister = params => {
  return request('/api/user/register', params)
}

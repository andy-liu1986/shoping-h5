import request from '@/util/request.js'

export default {
  // 登录
   login(){
    return request({
      url: '/login',
      method: 'post',
      data: data
    })
  },
  // 退出出登录
  lougout(){
    return request({
      url: '/login',
      method: 'post',
      data: data
    })
  }
}
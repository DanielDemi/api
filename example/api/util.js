import axios from 'axios'
import configure from '../../config/index'
import { Message, MessageBox } from 'hui'
import i18n from '@/i18n'

const http = axios.create({
  timeout: 20000,
  withCredentials: true,
  headers: {'X-Requested-With': 'XMLHttpRequest'}
})

// 相应拦截器
http.interceptors.response.use(function (response) {

  // 请求多语言的json文件
  if (response.config.url.indexOf('json') > -1) {
    return response
  }

   // 根据响应数据判断是否登录过期
  if (response.data.success === false && response.data.errorCode === 'pleaseRefreshByHeader') {
    let refreshUrl = response.headers['refresh-url'].split('?')[0]
    refreshUrl = refreshUrl + '?service=' + location.protocol + '//' + location.host + location.pathname + encodeURIComponent(location.search)
    location.href = refreshUrl
  }

  // 对错误进行统一处理
  if (response.data.code !== '0' && response.data.msg) {
    if (!response.config.noMsg && response.data.msg) {
      Message.error(i18n.t(response.data.msg))
    }
    return Promise.reject(response)
  } else if (response.data.code === '0' && response.config.successNotify) { // 弹出成功提示
    Message.success(i18n.t(response.data.msg) || 'success !')
  }
  return Promise.resolve({
    msg: response.data.msg,
    data: response.data.data
  })
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 请求拦截器
http.interceptors.request.use(function (config) {
  if (config.url.indexOf('json') < 0) {
    config.url = `${configure.apiPrefix + config.url}`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

function createAPI(baseURL) {
  return function (conf) {
    conf = conf || {};
    return http(Object.assign({}, {
      url: conf.url,
      baseURL: baseURL,
      method: conf.method
    }, conf.opts))
  }
}

export default createAPI

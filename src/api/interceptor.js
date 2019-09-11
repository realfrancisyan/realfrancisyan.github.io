import axios from 'axios'
import constants from '../common/constants'

// 拦截 request ，设置全局请求为 ajax 请求
axios.interceptors.request.use(config => {
  config.withCredentials = true

  config.headers['Access-Control-Allow-Origin'] = '*'
  config.headers['Content-Type'] = 'application/json'
  config.headers['X-Requested-With'] = 'XMLHttpRequest'

  const token = localStorage.getItem('stravaToken')
  config.headers['Authorization'] = token ? `Bearer ${token}` : ''

  return config
});

// 拦截响应 response，并做一些错误处理
axios.interceptors.response.use(
  res => {
    const { data } = res

    // 全局设置错误提示
    switch (data.result) {
      case constants.STATUS.FAILURE:
        alert(data.message)
        break

      default:
    }

    switch (data.status) {
      case 401:
        if (window.location.pathname !== '/') {
          window.location.href = '/'
        }
        break

      default:
    }

    return data
  },
  err => {
    // 这里是返回状态码不为 200 时候的错误处理
    return Promise.reject(err);
  }
);

export default axios;

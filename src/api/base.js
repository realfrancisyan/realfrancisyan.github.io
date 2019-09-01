import axios from './interceptor'

export const MethodType = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

export const request = (url, method = MethodType.GET, params = {}) => {
  const data = method === 'GET' ? 'params' : 'data'

  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      [data]: params
    })
      .then(res => {
        resolve(res)
      })
      .catch(err => { reject(err) })
  })
}
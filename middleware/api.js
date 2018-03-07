import axios from 'axios'

export default {
  request (method, uri, data = null, token = null) {
    if (!method) {
      console.error('API function call requires method argument')
      return
    }

    if (!uri) {
      console.error('API function call requires uri argument')
      return
    }

    if (!token) {
      token = window.localStorage.getItem('token')
    }

    var url = process.env.URL_API + uri

    axios.interceptors.response.use(undefined, err => {
      var res = err.response
      if (res.status === 401 && res.config && !res.config.__isRetryRequest && res.config.url.match(/me\/login/) === null) {
        if (window.localStorage) {
          window.localStorage.setItem('user', null)
          window.localStorage.setItem('token', null)
          document.cookie = 'sso_token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;domain='
          document.cookie = 'sso_token=;expires=Thu, 01 Jan 1970 00:00:00 UTC'
        }

        window.location.href = '/login'
      }

      return Promise.reject(err)
    })

    return axios({
      method,
      url,
      data,
      headers: {
        'Authorization': token
      }
    })
  }
}

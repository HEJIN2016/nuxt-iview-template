import axios from 'axios'
import Cookie from 'js-cookie'

export default ({ app, store, redirect }) => {
  if (process.client) {
    axios.interceptors.request.use(config => {
      let token = Cookie.get('token');
      if (token) {
        if (!config.params) {
          config.params = {}
        }
        if (!config.params.token) {
          config.params.token = token;
        }
      }
      return config;
    }, err => {
      return Promise.reject(err);
    });

    axios.interceptors.response.use((response) => {
      return response;
    }, function (error) {
      return Promise.reject(error);
    });
  }
}

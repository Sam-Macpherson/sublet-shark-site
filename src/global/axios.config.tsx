import _axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL_BASE;

const api = _axios.create({
    baseURL: baseURL,
    timeout: 8000,
    headers: {
        "Authorization": localStorage.getItem("access_token") !== null
            ? "Bearer " + localStorage.getItem("access_token")
            : null,
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

api.interceptors.response.use(
  (response) => {
      return response;
  },
  async function (error) {
      const originalRequest = error.config;

      if (typeof error.response === 'undefined') {
          alert(
            'A server/network error occurred. ' +
            'Looks like CORS might be the problem. ' +
            'Sorry about this - we will get it fixed shortly.'
          );
          return Promise.reject(error);
      }

      if (error.response.status === 401 && originalRequest.url === baseURL + '/users/refresh/') {
          window.location.href = '/auth/login/';
          return Promise.reject(error);
      }
      console.log(error.response.data.detail, error.response.status, error.response.statusText);
      if ((error.response.data.detail === 'Authentication credentials were not provided.'
        || error.response.data.detail === 'Given token not valid for any token type')
        && error.response.status === 401
        && error.response.statusText === 'Unauthorized') {
          const refreshToken = localStorage.getItem('refresh_token');

          if (refreshToken) {
              const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

              // exp date in token is expressed in seconds, while now() returns milliseconds:
              const now = Math.ceil(Date.now() / 1000);
              console.log(tokenParts.exp);

              if (tokenParts.exp > now) {
                  return api
                    .post('/users/refresh/', { refresh: refreshToken })
                    .then((response) => {
                        localStorage.setItem('access_token', response.data.access);
                        localStorage.setItem('refresh_token', response.data.refresh);

                        api.defaults.headers['Authorization'] =
                          'Bearer ' + response.data.access;
                        originalRequest.headers['Authorization'] =
                          'Bearer ' + response.data.access;

                        return api(originalRequest);
                    }).catch((err) => {
                        console.log(err);
                    });
              } else {
                  console.log('Refresh token is expired', tokenParts.exp, now);
                  window.location.href = '/auth/login/';
              }
          } else {
              console.log('Refresh token not available.');
              window.location.href = '/auth/login/';
          }
      }

      // specific error handling done elsewhere
      return Promise.reject(error);
  }
);

export { api };

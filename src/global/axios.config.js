import _axios from 'axios';

const api = _axios.create({
    baseURL: process.env.REACT_APP_API_URL_BASE,
    timeout: 5000,
    headers: {
        Authorization: '',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default api;

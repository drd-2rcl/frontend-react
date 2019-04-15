import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-didi.herokuapp.com'
});

export default api;
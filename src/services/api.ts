import axios from 'axios';


const Axios = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
});


Axios.defaults.headers.post['Content-Type'] = 'application/json';

export default Axios;
import axios from "axios";
import AppConfig from "AppConfig.json"


// Global Axios Settings
axios.defaults.baseURL = AppConfig.API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 10000;

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};

export default http;

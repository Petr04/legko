import axios from 'axios';

export default axios.create({
  // baseURL: 'http://192.168.100.2:8080/',
  baseURL: 'https://legko-server.herokuapp.com/'
});

/**
 * @format
 */
import axios from 'axios';

const instance = axios.create({
  timeout: 15000,
  withCredentials: true
});

export default instance;

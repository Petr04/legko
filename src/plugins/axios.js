import localforage from 'localforage';
import { setup } from 'axios-cache-adapter';

/* eslint-disable */

const store = localforage.createInstance({
  name: 'myApp',
  driver: [
    // window.cordovaSQLiteDriver._driver,
    localforage.INDEXEDDB,
    localforage.WEBSQL,
  ],
  size: 104857600, // 100 MB
});

export default setup({
  // baseURL: 'http://192.168.100.2:8080/',
  baseURL: 'https://legko-server.herokuapp.com/',
  maxAge: 15 * 60 * 1000,
  store,
});

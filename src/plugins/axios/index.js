import axios from 'axios'

const instance = axios.create({
  baseURL: "http://testwork.rdbx24.ru/api/",
});

export default instance;

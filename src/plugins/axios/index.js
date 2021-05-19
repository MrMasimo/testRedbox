import axios from 'axios'

const instance = axios.create({
  baseURL: "https://testwork.rdbx24.ru/api/",
});

export default instance;

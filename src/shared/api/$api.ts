import axios, { CreateAxiosDefaults } from 'axios';
import { SERVER_URL } from '../config/api.config';

const options: CreateAxiosDefaults = {
  baseURL: SERVER_URL,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};

const $api = axios.create(options);

export { $api };

import request from 'axios';
import config from 'config';

import { handleSuccess, handleError } from './helpers';

const baseURL = config.api.user;

// C# APIs
export const auth = (data = {}) =>
  request.post(`${baseURL}/api/Users/Auth`, data, { withCredentials: true })
    .then(handleSuccess)
    .catch(handleError);

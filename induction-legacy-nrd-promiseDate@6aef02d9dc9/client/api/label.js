import request from 'axios';
import config from 'config';

import { handleSuccess, handleError } from './helpers';

const baseURL = config.api.label;

// C# APIs
export const getShipUnitLabel = (data) =>
  request.post(`${baseURL}/api/Label/GetShipUnitLabel`, data, { withCredentials: true })
    .then(handleSuccess)
    .catch(handleError);

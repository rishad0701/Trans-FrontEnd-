import request from 'axios';
import config from 'config';

import { handleSuccess, handleError, handleDataArray, authHeader } from './helpers';

const baseURL = config.api.lookup;

// Node APIs
export const getCityStateByZip = ({ zipCode }) =>
  request.get(`${baseURL}/api/lookup/getcitystatezip/${zipCode}`, { headers: authHeader() })
    .then(handleSuccess)
    .catch(handleError)
    .then(handleDataArray);

export const getDistributionCenters = () =>
  request.get(`${baseURL}/api/lookup/getdistributioncenters`, { headers: authHeader() })
    .then(handleSuccess)
    .catch(handleError)
    .then(handleDataArray);

export const getActiveCarriers = () =>
  request.get(`${baseURL}/api/lookup/getactivecarriers`, { headers: authHeader() })
    .then(handleSuccess)
    .catch(handleError)
    .then(handleDataArray);

export const getStandardCartons = () =>
  request.get(`${baseURL}/api/lookup/getstandardcartons`, { headers: authHeader() })
    .then(handleSuccess)
    .catch(handleError)
    .then(handleDataArray);

export const getStandardCarton = ({ cartonName }) =>
  request.get(`${baseURL}/api/lookup/getstandardcarton/${cartonName}`, { headers: authHeader() })
    .then(handleSuccess)
    .catch(handleError);

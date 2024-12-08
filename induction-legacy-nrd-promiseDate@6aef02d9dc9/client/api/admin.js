import request from 'axios';
import config from 'config';

import { handleSuccess, handleError, handleDataArray, authHeader } from './helpers';

const baseURL = config.api.admin;

// Lists
export const getDistributionCenters = (params) =>
  request.get(`${baseURL}/api/admin/dcs`, { params, headers: authHeader() })
    .then(handleSuccess)
    .catch(handleError)
    .then(handleDataArray);

export const getCarriersByDistributionCenter = (params) =>
  request.get(`${baseURL}/api/admin/carriersbydc`, { params, headers: authHeader() })
    .then(handleSuccess)
    .catch(handleError)
    .then(handleDataArray);

export const getShipMethodsByCarrier = (params) =>
  request.get(`${baseURL}/api/admin/shipmethodsbycarrier`, { params, headers: authHeader() })
    .then(handleSuccess)
    .catch(handleError)
    .then(handleDataArray);

// For manifest (No Fedex)
export const getTNTCarriers = (params) =>
  request.get(`${baseURL}/api/admin/tntcarriers`, { params, headers: authHeader() })
    .then(handleSuccess)
    .catch(handleError)
    .then(handleDataArray);

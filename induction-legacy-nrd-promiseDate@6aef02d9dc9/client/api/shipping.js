import request from 'axios';
import config from 'config';

import { handleSuccess, handleError } from './helpers';

const baseURL = config.api.shipping;

// C# APIs
export const createShipUnit = (data) =>
  request.post(`${baseURL}/api/Shipping/Induction/CreateShipUnit`, data, { withCredentials: true })
    .then(handleSuccess)
    .catch(handleError);

export const getShipMethods = () =>
  request.get(`${baseURL}/api/shipmethod`, { withCredentials: true })
    .then(handleSuccess)
    .catch(handleError);

// External Luxoft
export const getShipUnit = ({ distributionCenter, cartonNumber }) =>
  request.get(`${baseURL}/api/ShipUnit/external/${distributionCenter}/${cartonNumber}`, { withCredentials: true })
    .then(handleSuccess)
    .catch(handleError);

export const putShipUnit = (data, { distributionCenter, cartonNumber }) =>
  request.put(
    `${baseURL}/api/ShipUnit/external/${distributionCenter}/${cartonNumber}/tracking`,
    data,
    { withCredentials: true },
  )
    .then(handleSuccess)
    .catch(handleError);

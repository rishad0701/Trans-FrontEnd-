import request from 'axios';
import config from 'config';

import { handleSuccess, handleError } from './helpers';

const baseURL = config.api.manifest;

// C# APIs
export const postManifestCarriers = (data) =>
  request.post(`${baseURL}/api/ManifestCarriers`, data, { withCredentials: true })
    .then(handleSuccess)
    .catch(handleError);

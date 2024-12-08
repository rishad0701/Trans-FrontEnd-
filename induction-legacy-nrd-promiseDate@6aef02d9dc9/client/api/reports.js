import request from 'axios';
import config from 'config';

import { handleSuccess, handleError, handleDataArray, authHeader } from './helpers';

const baseURL = config.api.reports;

// Node APIs
export const getFilteredLabelHistory = ({ startdate, dc, duid, status, userid, packday, starttime, endtime }) =>
  request.get(
    // eslint-disable-next-line
    `${baseURL}/api/Reports/getFilteredLabelHistory/${startdate}/${dc}/${duid}/${status}/${userid}/${packday}/${starttime}/${endtime}`,
    { headers: authHeader() },
  )
    .then(handleSuccess)
    .catch(handleError)
    .then(handleDataArray);

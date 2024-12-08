import R from 'ramda';
import { allowedRoles } from 'config';

export const validateRoles = (userRoles) =>
  R.any(role => R.includes(role, allowedRoles), userRoles);

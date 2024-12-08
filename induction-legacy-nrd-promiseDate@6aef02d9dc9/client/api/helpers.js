import store from '_client/store';
import history from '_client/history';

export const handleSuccess = resp => resp.data;

export const handleDataArray = data => {
  if (Array.isArray(data) && data.length === 1) {
    return data[0];
  }

  throw new Error(data);
};

export const handleError = error => {
  if (error.response?.status === 403) {
    history.push('unauthorized');
  }

  if (error.response) {
    throw error.response;
  } else {
    const response = { status: 500, body: { message: 'Internal Server error' } };
    throw response;
  }
};

export function authHeader() {
  const { token } = store.getState().user;

  if (token) {
    return { Authorization: token };
  }

  return {};
}

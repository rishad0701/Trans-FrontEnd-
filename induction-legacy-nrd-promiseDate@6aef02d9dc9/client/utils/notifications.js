import { store as RNC } from 'react-notifications-component';

export function addSuccessNotification({
  title = 'Success',
  message = '',
  container = 'bottom-left',
  ...rest
}) {
  RNC.addNotification({
    title,
    message,
    type: 'success',
    container,
    dismiss: {
      duration: 5000,
      pauseOnHover: true,
      showIcon: true,
      click: false,
    },
    ...rest,
  });
}

export function addErrorNotification({
  title = 'Error',
  message = 'An Error Occurred',
  container = 'bottom-left',
  ...rest
}) {
  RNC.addNotification({
    title,
    message,
    type: 'danger',
    container,
    dismiss: {
      duration: 10000,
      pauseOnHover: true,
      showIcon: true,
      click: false,
    },
    ...rest,
  });
}

export function addDefaultNotification({
  message = '',
  container = 'bottom-left',
  ...rest
}) {
  RNC.addNotification({
    message,
    type: 'default',
    container,
    dismiss: {
      duration: 5000,
      pauseOnHover: true,
      showIcon: true,
      click: false,
    },
    ...rest,
  });
}

/* eslint no-console: 0 */

import { addDefaultNotification, addErrorNotification } from '_utils/notifications';

function arrayBufferToString(buffer) {
  const arr = new Uint8Array(buffer);
  // eslint-disable-next-line
  const str = String.fromCharCode.apply(String, arr);

  return decodeURIComponent(escape(str));
}

export function weighBox({ updateWeight, weightUnit }) {
  const ws = new WebSocket('ws://localhost:8088/LighthouseScaleComm');
  ws.binaryType = 'arraybuffer';

  ws.onmessage = evt => {
    const result = arrayBufferToString(evt.data);
    let newWeight;

    const valid = !Number.isNaN(parseFloat(result));

    if (valid) {
      if (weightUnit === 'oz') {
        newWeight = parseFloat(result * 16).toFixed(2);
      } else if (weightUnit === 'kgs') {
        newWeight = parseFloat(result / 2.20462).toFixed(2);
      } else if (weightUnit === 'lbs') {
        newWeight = parseFloat(result).toFixed(2);
      } else {
        newWeight = parseFloat(result).toFixed(2);
      }

      if (parseFloat(result) === 0) {
        addErrorNotification({
          message: 'Item must be placed on scale',
        });
      } else {
        updateWeight(newWeight);
      }
    } else {
      addDefaultNotification({
        message: result,
      });
    }

    if (evt.returnValue === true && ws.readyState === 1) {
      ws.close();
    }
  };
}

export function printLabel({ labelData }) {
  const ws = new WebSocket('ws://localhost:8088/LighthousePrinterComm');
  ws.binaryType = 'arraybuffer';

  ws.onopen = () => {
    try {
      ws.send(`"${atob(labelData)}"`);

      addDefaultNotification({
        title: 'Printer message',
        message: 'label sent to printer',
      });
    } catch (error) {
      addErrorNotification({
        title: 'Printer error',
        message: error?.message || 'An error occurred',
      });
    }
  };

  // Lighthouse communicator message needs to be updated
  // ws.onmessage = evt => {
  //   const result = arrayBufferToString(evt.data);

  //   store.addNotification({
  //     title: 'Printer message',
  //     message: result,
  //     type: 'default',
  //     container: 'bottom-left',
  //     dismiss: {
  //       duration: 5000,
  //     },
  //   });
  // };

  ws.onerror = error => {
    addErrorNotification({
      title: 'Printer error',
      message: error?.message || 'An error occurred',
    });
  };
}

export function getLocalUser({ handleUser }) {
  const ws = new WebSocket('ws://localhost:8223/LighthouseSystemUserComm/');
  ws.binaryType = 'arraybuffer';
  let result;

  ws.onmessage = evt => {
    result = JSON.parse(evt.data);
    handleUser(result);
  };
}

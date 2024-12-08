export function validateZipCodeUS(zipCode) {
  if (typeof zipCode !== 'string') {
    return false;
  }
  return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
}

export function validateShipment({ deliverTo, cartonInfo, details }) {
  // if (!deliverTo.firstName) return false;
  // if (!deliverTo.lastName) return false;
  if (!deliverTo.individualName) return false;
  if (!deliverTo.zipCode) return false;
  if (deliverTo.country === 'USA' && !validateZipCodeUS(deliverTo.zipCode)) return false;
  if (!deliverTo.city) return false;
  if (!deliverTo.state) return false;
  if (!deliverTo.country) return false;
  if (!deliverTo.phoneNumber) return false;
  if (!cartonInfo.cartonNumber && !cartonInfo.orderNumber) return false;
  if (!details.weight) return false;
  if (cartonInfo.override && !cartonInfo.shipMethod) return false;

  return true;
}

export function validatePoBox(poBox) {
  if (typeof poBox !== 'string') {
    return false;
  }

  const pattern = new RegExp('\\b[p]*(ost)*\\.*\\s*[o|0]*(ffice)*\\.*\\s*b[o|0]x\\b', 'i');

  return pattern.test(poBox);
}

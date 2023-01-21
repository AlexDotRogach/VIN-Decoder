import { NotificationManager } from 'react-notifications';

const errorMessage = {
  short: 'VIN код автомобиля слишком длинный',
  symbols: 'VIN код имеет запрещенные символы',
};
export const validateVIN = VIN => {
  const { short, symbols } = errorMessage;

  if (VIN.length > 17) {
    NotificationManager.warning(short);
    return;
  }

  if (/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(VIN)) {
    NotificationManager.warning(symbols);
    return;
  }

  return true;
};

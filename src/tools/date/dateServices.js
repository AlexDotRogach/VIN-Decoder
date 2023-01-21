export function getDayWeek(number, type = 'full') {
  return {
    full: {
      0: 'Воскресенье',
      1: 'Понедельник',
      2: 'Вторник',
      3: 'Среда',
      4: 'Четверг',
      5: 'Пятница',
      6: 'Суббота',
    },

    short: {
      0: 'Вос',
      1: 'Пон',
      2: 'Вт',
      3: 'Ср',
      4: 'Четв',
      5: 'Пят',
      6: 'Суб',
    },
  }[type][number];
}

export function getMonth(number, type = 'full') {
  return {
    full: {
      0: 'Январь',
      1: 'Февраль',
      2: 'Март',
      3: 'Апрель',
      4: 'Май',
      5: 'Июнь',
      6: 'Июль',
      7: 'Август',
      8: 'Сентябрь',
      9: 'Октябрь',
      10: 'Ноябрь',
      11: 'Декабрь',
    },

    short: {
      0: 'Янв',
      1: 'Фев',
      2: 'Март',
      3: 'Апр',
      4: 'Май',
      5: 'Июнь',
      6: 'Июль',
      7: 'Авг',
      8: 'Сент',
      9: 'Окт',
      10: 'Нояб',
      11: 'Дек',
    },
  }[type][number];
}

export function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

export function getDateInfo(date) {
  const month = `${date.getMonth()}`.padStart(2, '0');
  const dayOfWeek = date.getDay();
  const year = date.getFullYear();
  const day = `${date.getDate()}`.padStart(2, '0');

  return { month, dayOfWeek, day, year };
}

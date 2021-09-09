export const getCommaAndValue = (stop, stops, i) => {
  debugger;
  if (stops.length > 0 && stops.length - 1 === i) {
    return stop;
  }
  if (stops.length > 1 && stops.length - 1 !== i) {
    return `${stop}, `;
  }
};

export const timeConvert = n => {
  const num = n;
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return rhours + 'ч' + ' ' + rminutes + 'м';
};
const addMinutes = (date, minutes) => {
  return new Date(date.getTime() + minutes * 60000);
};

const getHoursFromDate = value => {
  return value.getUTCHours().toString().length === 1
    ? '0' + value.getUTCHours().toString()
    : value.getUTCHours().toString();
};
const getMinutesFromDate = value => {
  return value.getUTCMinutes().toString().length === 1
    ? '0' + value.getUTCMinutes().toString()
    : value.getUTCMinutes().toString();
};

export const getTimeInterval = (date, duration) => {
  const fromTime = new Date(date);
  const fromTimeHours = getHoursFromDate(fromTime);

  const fromTimeMinutes = getMinutesFromDate(fromTime);

  const tillTime = addMinutes(fromTime, duration);
  const tillTimeHours = getHoursFromDate(tillTime);
  const tillTimeMinutes = getMinutesFromDate(tillTime);
  return `${fromTimeHours}:${fromTimeMinutes} - ${tillTimeHours}:${tillTimeMinutes}`;
};

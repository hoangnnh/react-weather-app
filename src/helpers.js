const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const convertDtFromOwmApiToDate = (dt) => {
  const time = new Date(dt * 1000);

  const year = time.getFullYear()
  const weekday = WEEK_DAYS[time.getDay()];
  const month = MONTHS[time.getMonth()];
  const day = time.getDay();

  return `${weekday}, ${month} ${day} ${year}`;
};

export const convertDtFromOwmApiToTime = (dt) => {
  const time = new Date(dt * 1000);

  const hour = time.getHours();
  const minute = time.getMinutes();

  return `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }`;
};

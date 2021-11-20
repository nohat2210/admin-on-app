import dayjs from 'dayjs';

const getDate = prevDays => {
  const now = dayjs();
  const date = now.subtract(prevDays, 'day').toDate();
  return date;
};
export default getDate;

export const formatDate = (date, formatter = 'D MMMM , YYYY') => {
  return dayjs(date).format(formatter);
};

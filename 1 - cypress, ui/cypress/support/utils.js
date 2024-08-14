export function getDateFromTodayInFormat(daysFromToday, locale = 'en-US', options) {
  const date = new Date();
  date.setDate(date.getDate() + daysFromToday);
  return date.toLocaleDateString(locale, options);
};

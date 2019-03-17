export const toDate = (dateString) => {
  new Date(dateString);
};

export const toDateString = (date) => {
  return new Date(
      date.getTime() - (date.getTimezoneOffset() * 60000)
  ).toISOString().split('T')[0];
};

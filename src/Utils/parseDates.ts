export const parseDateToLocale = (dateTime: number, startText: string = "") => {
  const date = new Date(dateTime);

  const parseDateNumber = (number: number) => `0${number}`.slice(-2);

  const hours = parseDateNumber(date.getHours());
  const minutes = parseDateNumber(date.getMinutes());

  return `${startText} ${hours}:${minutes}`;
};

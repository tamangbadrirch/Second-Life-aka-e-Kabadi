export const format = (date: string) => {
  if (!date) return null;
  var d = new Date(date);
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    ?.toISOString()
    ?.split("T")[0];
};

export const formatDate = (date: string) => {
  if (date) {
    const formatedDate = date?.split(' ');

    return `${formatedDate[0]}`;
  }
  return date;
};

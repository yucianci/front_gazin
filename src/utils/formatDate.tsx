export const formatDate = (date: string) => {
  const formatedDate = date.split('T')[0];
  const dateSplit = formatedDate.replace(/-/g, '/').split('/');

  return `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;
};

export const convertDateTime = (epochTime) => {
  const dateConverted = new Date(epochTime);
  return dateConverted.toLocaleString();
};

export default {
  convertDateTime,
};

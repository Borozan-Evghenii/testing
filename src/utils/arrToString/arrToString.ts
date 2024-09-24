export const arrToString = (arr: (string | number)[]) => {
  return arr.filter((item) => Number.isInteger(item)).map(String);
};

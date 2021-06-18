export const convertPointToComa = (frequency) => {
  if (!frequency && frequency !== 0) return;
  return frequency.toString().split(".").join(",");
};

export const getMoment = () => { 
  return new Date().getTime();
};

export const displayEndOfTheScript = (startOfTheScript: number) => {
  console.log((getMoment() - startOfTheScript) + "ms");
}
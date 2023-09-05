export const sum = (a: number, b: number): number => a + b;

export const stringToNumber = <T>(a: T extends `${number}` ? T : never) => {
  return parseInt(a);
};

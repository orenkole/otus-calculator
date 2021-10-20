export const removeSpaces = (string: string): string => {
  const stringWithoutSpaces = string.replace(/ /g, "");
  return stringWithoutSpaces;
}
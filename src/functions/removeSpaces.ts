export const removeSpaces = (string: string): string => {
  console.log(string);
  const stringWithoutSpaces = string.replace(/ /g, "");
  console.log(stringWithoutSpaces);
  return stringWithoutSpaces;
}
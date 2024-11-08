export default function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error("Parameter is not a string!");
  }

  const stringArray = string.split(" ");
  let finalString = "";

  for (let i = 0; i < stringArray.length; i++) {
    const capitalizedString =
      stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
    finalString = finalString + capitalizedString + " ";
  }
  finalString = finalString.slice(0, -1);

  return finalString;
}

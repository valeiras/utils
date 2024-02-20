export const getFriendlyUrl = (string, separator = "_") => {
  const a = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/-,:;&";
  const b = "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz_______";
  const p = new RegExp(a.split("").join("|"), "g");

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, separator) // Replace spaces with _
    .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/[^\w-]+/g, "_"); // Replace non-word characters with _
};

export const beautify = (str) => {
  const trimmed = str.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
};

export const setIntervalImmediately = (func, interval) => {
  func();
  return setInterval(func, interval);
};

export const getUniqueByField = (arr, fieldName, allowEmpty = true) => {
  let arrayUniqueByField = [...new Map(arr.map((item) => [item[fieldName], item])).values()];
  if (!allowEmpty) arrayUniqueByField = arrayUniqueByField.filter((el) => el[fieldName]);

  return arrayUniqueByField;
};

export const splitArray = (arr, isValid) => {
  return arr?.reduce(
    ([pass, fail], elem) => {
      return isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]];
    },
    [[], []]
  );
};

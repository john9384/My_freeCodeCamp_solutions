const perms = (str) => {
  const result = [];
  if (str.length < 2) return [str];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const otherChars = str.substring(0, i) + str.substring(i + 1);
    const otherPerms = perms(otherChars);
    otherPerms.forEach((x) => {
      result.push(char + x);
    });
  }
  return result;
};
const hasRepeat = (str) => {
  let prevChar = str[0];
  for (let i = 1; i < str.length; i++) {
    if (prevChar === str[i]) return true;
    prevChar = str[i];
  }
  return false;
};
const permAlone = (string) => {
  if (typeof string !== "string") {
    throw new Error("Parameter must be a string.");
  }

  if (string === "") {
    throw new Error("Parameter cannot be an empty string.");
  }

  const permutations = perms(string);

  const noRepeatPerms = [];
  for (const str of permutations) {
    if (!hasRepeat(str)) {
      noRepeatPerms.push(str);
    }
  }

  return noRepeatPerms.length;
};

const test = permAlone("aab");
console.log(test);

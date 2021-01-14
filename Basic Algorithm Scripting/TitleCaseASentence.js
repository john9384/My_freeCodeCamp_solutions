function titleCase(str) {
  let strArr = str.split(" ");
  let arr = [];
  const titleCase = word => {
    return `${word[0].toUpperCase()}${word
      .slice(1, word.length)
      .toLowerCase()}`;
  };
  for (let i = 0; i < strArr.length; i++) {
    arr.push(titleCase(strArr[i]));
  }
  return arr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));

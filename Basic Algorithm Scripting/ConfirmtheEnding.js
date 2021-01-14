function confirmEnding(str, target) {
  let checkStrMatch = (str, text) => {
    let state = false;
    let strArr = [];
    for (let i = str.length - 1; i >= 0; i--) {
      strArr.unshift(str[i]);
      let tempStr = strArr.join("");
      if (tempStr == text) {
        state = true;
      }
    }
    return state;
  };
  if (!str.includes(" ")) {
    return checkStrMatch(str, target) ? true : false;
  } else {
    let arr = str.split(" ");
    return checkStrMatch(arr[arr.length - 1], target) ? true : false;
  }
}
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(
  confirmEnding(
    "Walking on water and developing software from a specification are easy if both are frozen",
    "specification"
  )
);
console.log(confirmEnding("Open sesame", "same"));

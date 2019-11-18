function palindrome(str) {
  let plainStr = str.replace(/[^0-9a-z]/gi, "");
  let reversedStr = plainStr
    .split("")
    .reverse()
    .join("");
  if (plainStr.toLowerCase() == reversedStr.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("A man, a plan, a canal. Panama"));

function truncateString(str, num) {
  let truncated = str.slice(0, num);
  if (truncated.length >= str.length) {
    return str;
  } else {
    console.log("lesser");
    return `${str.slice(0, num)}...`;
  }
}

console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
  )
);
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 6));

function telephoneCheck(str) {
  // Good luck!
  let regex = /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/;
  return regex.test(str);
}

console.log(telephoneCheck("-1 (555)555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("3 (555)555-5555"));

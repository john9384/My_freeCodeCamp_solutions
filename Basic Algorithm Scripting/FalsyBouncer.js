function bouncer(arr) {
  let falseList = [false, null, 0, "", undefined, NaN];
  let filteredArr = arr.filter(x => !falseList.includes(x));
  return filteredArr;
}

bouncer([7, "ate", "", false, 9]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer([null, NaN, 1, 2, undefined]);

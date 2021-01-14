function frankenSplice(arr1, arr2, n) {
  let copyArr = [...arr2];
  copyArr.splice(n, 0, ...arr1);
  return copyArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

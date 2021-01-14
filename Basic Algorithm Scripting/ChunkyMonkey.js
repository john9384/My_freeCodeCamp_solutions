function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length >= size) {
    newArr.push(arr.splice(0, size));
    if (arr.length <= size) {
      newArr.push(arr.splice(0, arr.length));
    }
  }
  // arr.slice(size, arr.length);
  return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log([
  [0, 1, 2, 3],
  [4, 5]
]);

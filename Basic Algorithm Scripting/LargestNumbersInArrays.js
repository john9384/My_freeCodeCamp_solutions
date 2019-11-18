function largestNumInArray(arr) {
  let newArr = arr.map(x => {
    let newArr = x.sort((a, b) => b - a);
    let largest = newArr[0];
    return largest;
  });
  arr = newArr;
  return arr;
}

largestNumInArray([
  [3, 4, 67, 8, 9, 7],
  [444, 53, 678, 89, 543],
  [222, 34, 54, 321, 334],
  [444, 53, 678, 89, 543]
]);

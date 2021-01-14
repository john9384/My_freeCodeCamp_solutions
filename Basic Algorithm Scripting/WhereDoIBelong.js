function getIndexToIns(arr, num) {
  let index;
  let sortedArr = arr.sort((a, b) => a - b);
  if (arr.length == 0) {
    index = 0;
  } else if (sortedArr[arr.length - 1] <= num) {
    index = arr.length;
  } else {
    index = sortedArr.findIndex(x => x >= num);
  }

  console.log(index);
  return index;
}

getIndexToIns([40, 45, 60], 50);
getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([2, 5, 10], 15);
getIndexToIns([], 1);

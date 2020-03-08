function sym(...args) {
  //for Each array filter array based on all arrays
  let emptyArr = [];
  let universalArr = emptyArr.concat(...args);
  for (let i = 0; i < args.length; i++) {}

  //   Get the ones not in second array
  //   Get the one from second not in first
  //   Join both new arrays
  //   let arrNotInSecond = arr1.filter(x => {
  //     return !arr2.includes(x);
  //   });
  //   let arrNotInFirst = arr2.filter(x => {
  //     return !arr1.includes(x);
  //   });
  //   let newArr = arrNotInSecond.concat(arrNotInFirst).sort();
  //   let uniquerArr = new Set(newArr);
  //   let arr = Array.from(uniquerArr);
  return check;
}

console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));

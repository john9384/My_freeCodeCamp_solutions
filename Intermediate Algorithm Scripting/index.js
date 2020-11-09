// 1. Sum All Numbers in a Range

/*
function sumAll(arr) {
  let [start, stop] = arr;
  const newArr = [];
  if (start < stop) {
    for (let i = start; i <= stop; i++) {
      newArr.push(i);
    }
  } else {
    for (let i = start; i >= stop; i--) {
      newArr.push(i);
    }
  }

  const reducer = (sum, init) => sum + init;
  console.log(newArr);
  return newArr.reduce((sum, init) => init + sum);
}
console.log(sumAll([10, 5])); 
*/

// 2 Diff Two Arrays

/*
function diffArray(arr1, arr2) {
  var newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
*/

// 3 Seek and Destroy
/*
function destroyer(arr) {
  let args = [...arguments];
  let destroyer = args.slice(1, args.length);
  let finalArr = arr.filter(elem => !destroyer.includes(elem));
  return finalArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); */

// 4 Wherefore art thou
function whatIsInAName(collection, source) {
  let arr = collection.filter(elem => {});
  let ch = Object.keys(source);

  let samp = ["apple", "bat"];
  console.log(ch);
  return arr;
}

whatIsInAName(
  [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, cookie: 2 }
);

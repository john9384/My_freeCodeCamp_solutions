let createArray = num => {
  let arr = [];
  for (let i = num; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};
function multiply(array) {
  let sum = 1;
  for (let i = 0; i < array.length; i++) {
    sum = sum * array[i];
  }
  return sum;
}
function factorialize(num) {
  let numArr = createArray(num);
  num = multiply(numArr);
  return num;
}

factorialize(5);

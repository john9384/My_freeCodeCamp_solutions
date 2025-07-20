function pairwise(arr, arg) {
  let visitedIndex = [];
  let indexSum = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(i, visitedIndex);
    if (visitedIndex.includes(i)) {
      console.log("Beep");
    } else {
      const potentialSum = arg - arr[i];
      const potentialIndex = arr.indexOf(potentialSum);
      if (arr.includes(potentialSum) && potentialIndex != i) {
        const pairSum = i + potentialIndex;
        indexSum += pairSum;
        //visitedIndex.push(`${i}`, `${potentialIndex}`);
        visitedIndex.push(i, potentialIndex);
        //    console.log(visitedIndex);
      }
    }
  }

  // console.log(indexSum);
}

pairwise([1, 1, 1], 2);
//pairwise([0, 0, 0, 0, 1, 1], 1);

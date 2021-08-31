function updateInventory(arr1, arr2) {
  const arr1Inv = arr1.map((inv) => inv[1]);
  for (let inventory of arr2) {
    if (arr1Inv.includes(inventory[1])) {
      const index = arr1Inv.indexOf(inventory[1]);
      arr1[index][0] += inventory[0];
    } else {
      arr1.push(inventory);
    }
  }
  const sortedArr = arr1.sort((a, b) => {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  });
  return sortedArr;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(curInv, newInv);

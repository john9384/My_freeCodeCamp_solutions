function checkCashRegister(price, cash, cid) {
  let cashBalance = cash - price;
  let cashArray = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let count = 0;
  let total = 0;
  let result = {
    status: "",
    change: [
      ["ONE HUNDRED", 0],
      ["TWENTY", 0],
      ["TEN", 0],
      ["FIVE", 0],
      ["ONE", 0],
      ["QUARTER", 0],
      ["DIME", 0],
      ["NICKEL", 0],
      ["PENNY", 0]
    ]
  };
  for (let j = 0; j < cid.length; j++) {
    total = (total * 10 + cid[j][1] * 10) / 10;
    if (j == cid.length - 1) {
      total = total * 100;
      let a = Math.round(total);
      total = a / 100;
    }
  }
  if (total < cashBalance) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
    return result;
  } else if (total == cashBalance) {
    result.status = "CLOSED";
    result.change = cid;
    return result;
  } else {
    result.status = "OPEN";
    for (let i = cid.length - 1; i >= 0; i--) {
      if (cashBalance - cashArray[i] >= 0) {
        while (cid[i][1] > 0 && cashBalance - cashArray[i] >= 0) {
          cid[i][1] = cid[i][1] - cashArray[i];
          result.change[count][1] += cashArray[i];
          cashBalance = cashBalance - cashArray[i];
          let b = Math.round(cashBalance * 100);
          cashBalance = b / 100;
        }
      }
      count++;
    }
  }
  if (cashBalance != 0) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
    return result;
  }
  let filtered = result.change.filter(function(x) {
    return x[1] > 0;
  });
  result.change = filtered;
  console.log(result);
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);

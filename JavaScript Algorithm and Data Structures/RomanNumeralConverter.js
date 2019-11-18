// Using Object key value pair and repeat function
// function convertToRoman(num) {
//   var roman = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1
//   };
//   var str = "";

//   for (var i of Object.keys(roman)) {
//     var q = Math.floor(num / roman[i]);
//     num -= q * roman[i];
//     str += i.repeat(q);
//   }
//   console.log(roman["M"]);

//   return str;
// }
// console.log(convertToRoman(3000));

//The recursive method
//Making use of Array to store the major numerals
var romanMatrix = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"]
];

function convertToRoman(num) {
  if (num === 0) {
    return "";
  }
  for (var i = 0; i < romanMatrix.length; i++) {
    if (num >= romanMatrix[i][0]) {
      num = romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
    }
  }
  return num;
}
console.log(convertToRoman(77));

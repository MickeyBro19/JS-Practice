const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNums = mynums.map((num) => num + 10); //better than for...each

console.log(newNums);
/* 
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19
]
*/

const newNums2 = mynums.map((num) => num * 10).map((num) => num + 1); //chaining of map's

console.log(newNums2);
/* 
[
  11, 21, 31, 41, 51,
  61, 71, 81, 91
]
*/





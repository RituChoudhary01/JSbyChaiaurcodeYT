// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true
//reason is that an equality check == and comparisons >,<,>=.<= work differently
//comparison convert null to a number 0 and then compare;

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

console.log("2" === 2);
console.log("2" !== 2);
console.log("4" !== 2);

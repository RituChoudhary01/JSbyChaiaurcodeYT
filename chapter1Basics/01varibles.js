console.log("Hello ji");

const accountId = 123;
let accountEmail = "rituchoudhary0802@gmail.com";
var accountPassword = "12345";
// prefer not use var because of issue in block scope and functional scope
accountCity = "hisar";
// bad practics but you can do without initial variable type this not show error
let accountState;
// accountId = 2; not allowed
console.log(accountId);
accountEmail = "ritu@ri.com";
accountPassword = "212121";
accountCity = "Bengaluru";

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity]);
console.log(accountState);
// conversion in numbers
// let score = 33;
// console.log(typeof score);

// let valueInNumber = Number(score);
// // it give you guarantee score convert in number 
// console.log(typeof valueInNumber);

// let score1 = "33abc";
// let valueInNumber1 = Number(score1);
// console.log(typeof valueInNumber1);
// console.log(valueInNumber1);//NaN is a type of number

// console.log(Number(null))//0
// console.log(typeof Number(null))
// console.log(Number(undefined))//NaN
// console.log(typeof Number(undefined))
// console.log(Number(true))//1
// console.log(typeof Number(true))
// console.log(Number("anyString"))//NaN for any string value

// conversion in boolean
// let isLoggedIn =1
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// in boolean data type
// 1 convert into true;
// 0 convert into false;
// "" empty string convert into false
// "Hey" every nonempty string convert into true like "0"," ";


// conversion in string
// let someNumber = 33;
// let stringNumber = String(someNumber); //first letter of data type must in capital letter
// console.log(typeof stringNumber);
// console.log(String(null));//null
// console.log(typeof String(null))
// console.log(String(undefined));//undefined
// console.log(typeof String(undefined))
// console.log(String(true));
// console.log(typeof String(true))
// console.log(String(45341n));
// console.log(typeof String(45341n))
// console.log(String(0n));
// console.log(typeof String(0n))
// console.log(String(0));
// console.log(typeof String(0))
// console.log(String(false));
// console.log(typeof String(false))
// console.log(String(2345));
// console.log(typeof String(2345))
// console.log(String("myname"));
// console.log(typeof String("myname"))
// all are print with same value but convert into string;


// operations
let value = 3;
let negvalue = -value;
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2);
console.log(2%2);

let str1 = "Ritu";
let str2 = " choudhary";
let str3 = str1+str2;
console.log(str3);

console.log(1+2);//3
console.log("1"+2);//12
console.log(1+"2");//12
console.log(1+2+2);//5
console.log(1+2+"2");//32
console.log("1"+2+2);//122

//bad practics not used
// console.log(3+4*5%3); //bad practics use parenthesis 
// console.log(+true)//1 convert into number
// console.log(-true)//1 convert into number
// console.log(true+)//give error
// console.log(true-)//give error
// let num1,num2,num3;
// num1 = num2 = num3 = 2+2 //bad practics

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
console.log(gameCounter++);
console.log(gameCounter);
console.log(++gameCounter);
console.log(gameCounter);
console.log(--gameCounter);
console.log(gameCounter);
console.log(gameCounter--);
console.log(gameCounter);

// prefix operator = first increment value of variable then use 
// postfix operator = first use value of variable then increment






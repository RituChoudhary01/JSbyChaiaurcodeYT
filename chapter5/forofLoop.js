// for of
["","","",""];
[{},{},{},{}];

const arr = [1,2,3,4];
for(const num of arr){
    console.log(num);
}

const greeting = "Hello World";
for(const greet of greeting){
    console.log(greet);
}

// Map
const map = new Map()
map.set('IN',"India");
map.set('USA',"United states of America")
map.set('Fr',"France")
map.set("IN","India")
console.log(map);

for(const[key,value]of map){
    console.log(key,":--", value);
}

// Objects are not iterable using forof loop
// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }
// for(const [key,value] of myObject){
//     console.log(key,':-',value);
// }

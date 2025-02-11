// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "ritu",
    "full name": "Ritu Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "random@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "random@gmail.com"
Object.freeze(JsUser)
JsUser.email = "random@google.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());
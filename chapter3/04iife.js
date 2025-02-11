// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('raj')


// javascript execution context it means javascript aapne program ko run kse kregi
/* javascript apne program ko 2 phase me run krti h 
jab ham aapna code javascript ko dete h to sbse phale jo chiz bnti h 
esme wo hmesa hi hmesa Global execution context or jo bhi global 
exection context bnta h usko  refer kar dete h this varible.
javascript ek single thread h usme har chij ek process hoti h.
first h Global EC
second h  Function EC
or Eval EC
javascript ka code 2 phases me run hota h 
first h memory creaction phases or creaction phases
second h Execution phases


let val1=10
let val2=5
function addNum(num1,num2){
let total = num1+num2
return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2);

1 code sbse phle global Execution ke andar execute hota h or 
ye allocated kiya jta h this ke ander.
2.Memory phase
sare variavle ko ekhta ki jta h or bus rkha jta h apne pass me
val1 = undefined
val2 = undefined
addNum->defition of function
result1 = undefined 
result2 = undefined
3.Execution phases
val1 = 10;
val2 = 5
result1 = me addNum function jaega wo kya krega ek alg exection contest
bnata h (new variable environment + execution thread) ab fir se global EP
and memory EP reapeat hoge addNum ke liye or ye process har bar reapeat 
hoga jitni bar aap function call krege.


call stack
1.global EC
2. then functions 
*/


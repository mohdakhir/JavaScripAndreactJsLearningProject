//1.regular function
function greet(){
    console.log("hello")
}
greet()

//function adding 2 numbers
function add(a,b){
    return a+b;
}
var z=add(10,20)
console.log(z)

//2.function expression
let sub=function(a,b){
    return (a-b);
}
let res=sub(20,10);
console.log(res)

//3.IIFE
let mul=(function(a,b){
    console.log(a*b)
})(2,3)
//4.Arrow function
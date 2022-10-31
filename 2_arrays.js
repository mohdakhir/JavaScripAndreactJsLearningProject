//intialize an array
let fruit=['apple','mango','anar','grapes']
console.log(fruit)//output [ 'apple', 'mango', 'anar', 'grapes' ]

//access a particular element
let mango=fruit[1];
console.log(mango)

let a=[10,"akhir",true]
console.log(a)// output [ 10, 'akhir', true ]

//differen array methods
//1.push()

a.push(false);
console.log(a)//output [ 10, 'akhir', true, false ]

//2.pop()
a.pop();
console.log(a)  //output [ 10, 'akhir', true ]

//3.unshift() 
a.unshift(5)
console.log(a) //[ 5, 10, 'akhir', true ]

//4.shift()
a.shift();
console.log(a)//[ 10, 'akhir', true ]
let person={
    name:'akhir',
    age:25,
    phone :123456789
}
//access all elements
console.log(person)
//access particular element
//using dot operator
console.log(person.name)
//qusing bracket notation
console.log(person['phone'])



let capitanAmerica={
    firstName:"steve",
    lastName:'rogers',
    isAvenger:true,
    friends:['thor','toney stark','buckey barners'],//array
    age:102,
    address:{
         state:"new york",   //object
         city:"Brroklyn"
    }
  // even we can define function also but later we will see
}
console.log(capitanAmerica.friends[1])// output toney stark

//add property(array) in object
capitanAmerica.movie=['civil war','end game']
console.log(capitanAmerica)

//delete properties from object
delete capitanAmerica.age;
console.log(capitanAmerica)

//update properties
capitanAmerica.isAvenger=true;
console.log(capitanAmerica)
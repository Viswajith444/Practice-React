arr = [{2:"hello"}, "hello", true]
for( i = 0; i < 3; i++){
    console.log(typeof(arr[i]))
}

console.log("for of");
for (let i of arr){
    console.log(i);
}

console.log('for in:');
for(let i in arr){
    console.log(i);
}

console.log("ForEach:");
arr.forEach((val, i) => {
    console.log(`${i} : ${val}`);
});


//Objects
/*obj1 =
{
  firstname :"Viswajith",
  lastname : "S",
  dept:["cse","it","ece","mech"]        // declaration-first way
  training : "mern"
}
obj2={}                                 //declaration-second way
obj2["age"]=20;
obj3 = new Object                       //declaration-third way
obj3["age"]=20;
console.log(obj1)                       //output way-1
console.log(obj1.firstname)             //output way-2
console.log(obj1["dept"])               //output way-3*/
//Set
/*set = new Set()
console.log(set)
set.add("Hello")
console.log(set)
set.add("World")
console.log(set)
console.log(typeof(set))*/
//Operators
//logical operator(&&,||,!)
/*console.log("logical and")
console.log(10 && 5)//5
console.log(true && 10)//10
console.log(false && 10)//false
console.log(false && true)//false
console.log(true && false)//false
console.log("logical or")
console.log(5 || 10)//5
console.log(true || 10)//true
console.log(false || 10)//10
console.log(false || true)//true
console.log(true || false)//true*/
//Relational operator(==,!=,===,!==,<=,>=)
/*a=5
b="5"
console.log(a==b)//true
console.log(a===b)//false
console.log(a!=b)//false
console.log(a!==b)//true*/
//bitwise operator(&,|,^,~,<<,>>)
/*a=70
b=35
c=13
console.log(a&b)//2
console.log(a|b)//103
console.log(a^b)//101
console.log(~c)//-14
console.log(10<<3)//80
console.log(10>>3)//1*/

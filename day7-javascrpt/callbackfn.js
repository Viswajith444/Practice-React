function fn(message, Aneesh_Loves_Himesh_And_Himesh_Loves_Aneesh){
    console.log(message);
    Aneesh_Loves_Himesh_And_Himesh_Loves_Aneesh();
}

function callbackfn(){
    console.log("Welcome back");
}

fn("welcome", callbackfn);

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }

  const person1 = new Person("Alice", 25);

  console.log(person1.name);
  person1.greet();

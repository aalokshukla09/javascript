// // Prototype and classes

// const obj = {
//     name:"Rohit",
//     age:38,
//     greet: function(){
//         console.log("Hello Ji")
//     }
// };


// console.log(obj.greet());
// obj.greet()

// console.log(obj.hasOwnProperty("names"));
// console.log(obj.toString());

// const obj2 = {
//     account:30
// }


// obj2.__proto__ = obj;
// // obj2 now inherits properties from obj

// console.log(obj2.account);
// console.log(obj2.age);
// obj2.greet();

// console.log(obj.hasOwnProperty("name"))

// array -> array.prototype -> object.prototype -> null

// function -> function.prototype -> object.prototype -> null

// obj -> obj.prototype -> object.prototype -> null 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// const person1 = new Person("Aalok", 18);
// // person1.greet();
// // console.log(person1.name);

// console.log(person1);

// Inheritance

class Customer extends Person {
    constructor(name,age,account,balance){
    super(name,age);// super keyword calls the parent class constructor
    this.account = account;
    this.balance = balance;
  }

  checkBalance(){
    return this.balance;
  }
}

const c1 = new Customer("Mohan",20,12,540);

console.log(c1.checkBalance());




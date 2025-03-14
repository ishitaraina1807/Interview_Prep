//Bind, call and Apply 

let myName = {
    first : "Ishita",
    last : "Raina",
}
let printFullName = function (age, hometown) {
    // console.log(this.first + " " + this.last + " age:" + age + " " + "Lives in " + hometown);
}
printFullName.call(myName, "22", "Jammu");

let otherName = {
    first: "Eklavya",
    last: "Tillu",
}
//Function Borrowing using the call method
printFullName.call(otherName, "21", "Udhampur");
//in apply method we just pass args as an array
printFullName.apply(otherName, ["21", "Udhampuriyaa"]);
//bind method - gives a copy which can be invoked late rather than invoking right away
let printUsingBind = printFullName.bind(otherName, "21", "Bangaluru soon?"); // it not called yet
printUsingBind(); // now invoked

// *******--------******---------------*********-----------*****

//Next we have Js Curry, not the one we eat :) 

function add(a) {
    //normally we do this but what if we want that this fun should not return anything unless we dont have all 3 args
    // return a+b+c; 
    //we do currying where we take arguements after every arg
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

// console.log(add(2,3,4))
// console.log(add(2)(4)(6)) 
//this is currying. if we dont have any parameter, it wont execute

//Practical Example 

//this is an old way of writing function

// function loginUser(username) {
//    return function(password) {
//      if(password === "pass123"){
//         console.log(username, "logged in successfully")
//     }
//     else console.log("Incorrect Password")
//    }
// } 

//New way using const

const loginUser = (username) => (password) => {
    if(password === "pass123") {
        // console.log(username, "logged in successfully")
    }
    else console.log("Incorrect password");
}

let step1 = loginUser("ishitaraina18")
let step2 = step1("pass123");


// *******--------******---------------*********-----------*****

//closure: func that has access to it's outer func scope even after the outer scope has executed 

function outer() {
    const name = "javascript";

    function inner() {
        // console.log(name);
    }
    return inner;
}
const closure = outer();
closure();

// *******--------******---------------*********-----------*****

//Random consoles:

// console.log(typeof NaN); // "number" 
// console.log(NaN === NaN); // false: NaN is the only value is js that is not equal to itself
// console.log(isNaN("hello")); // true (is not a number)
// console.log(Number("  10  ")); // 10 (converts to number ignoring the trailings)

// console.log(null == undefined);  // true
// console.log(null === undefined); // false
// console.log(null + 1);           // 1
// console.log(undefined + 1);      // NaN bcs undefined cannot be converted to number

// console.log([] == []);      // false - arrays are refrence types so they both create different memory
// console.log([] == ![]);     // true - bcs ![] becomes 0 and [] == 0 is true bcs [] is 0 as well as it's empty 
// console.log({} == {});      // false - objects are also refrence types
// console.log({} + []);       // "[object Object]" 

// { } + [] → "[object Object]" ❌ (This one was tricky!)

// {} is interpreted as an empty block of code if written alone.
// + [] converts an empty array to an empty string ("").
// So, it becomes { } + "" which evaluates to "[object Object]" (default string representation of an object).

// console.log(typeof NaN);        // "number" ✅
// console.log(typeof null);       // "object" ❌ (You said "undefined")
// console.log(typeof function(){}); // "function" ✅
// console.log(typeof []);         // "object" ❌ (You said "array")
// console.log(typeof {});         // "object" ✅
// console.log(typeof undefined);  // "undefined" ✅

// *******--------******---------------*********-----------*****

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("End");

// Output:
// Start  : goes directly in the call stack so executes immediately 
// End  : runs immediately sinc it's a normal sync log 
// Promise  : goes to micro queue - higher priority than macro but less than callstack
// Timeout  : moves to web API and sets 0ms but moved to macro so executed at last

// Note: even if setTimeout has 0ms, it waits for all synchronous and mirotasks to finish first

// *******--------******---------------*********-----------*****

//Scopes and this keyword:


const obj = {
    name: "Ishita",
    greet: function() {
        const self = this;
    //   console.log(this.name);
      
      setTimeout(function() {
        // console.log(self.name);
      }, 1000);
    }
  };
  
  obj.greet();
  
  // *******--------******---------------*********-----------*****

  //Function execution

  function sayHello() {
    // console.log("Hello, " + this.name);
  }
  
  const person1 = { name: "Ishita", greet: sayHello };
  const person2 = { name: "Behen", greet: person1.greet };
  
  person1.greet();  // Hello Ishita, this will refer to person1
  person2.greet();  // Hello Behen bcs person1.greet refers to sayHello and sayHello has a this which will refer to person2 only 
  sayHello(); // hello undefined bcs this will refer to window
  

// *******--------******---------------*********-----------*****

//Arrow function & this

const objectie = {
    name: "js krlo",
    greet: () => {
    //   console.log("okay, " + this.name);
    },
  };
  
  objectie.greet();

//   Arrow functions work inside setTimeout because they inherit this from the function they are in.
//   But when an arrow function is directly inside an object, it doesn't inherit this from the object—it takes this from the global scope.


// / *******--------******---------------*********-----------*****

//Prototype and this keyword 

// function Person(name) {
//     this.name = name;
//   }
  
//   Person.prototype.greet = function () {
//     console.log("Peep peep " + this.name);
//   };

// Person.prototype.greet = () => {
//     console.log("Hello " + this.name);
//   };
  
//   const p1 = new Person("Billu");
//   p1.greet();
  
//   let name = "billu"

//   const person = {
//     name: "Ishita",
//     greet: function () {
//       const inner = () => {
//         console.log("Inner " + this.name);
//       };
//       inner();
//     }
//   };
  
//   const greetFunc = person.greet;
//   greetFunc();

//Understand this question again, why let name wont work?

// / *******--------******---------------*********-----------*****


//create a copy of an object - not reference : this is not deep cloning but just how we can copy and object without its reference

let user = {
    name: "shimi shimi",
    age :  343,
}

//if we try to clone directly
let user2 = user

// user2.name = "billu billu";
const clone = Object.assign({ greet: function () {
    // console.log("hemlo" + this.name)
}}, user);

clone.name = "billu billu"

// console.log(user, user2);
// console.log(user, clone); //yaya clone is a clone now 

//also let's see the concept of call a little

clone.greet()

// user.greet() //this throws error

clone.greet.call(user) // worked! 

const objt = {
    name: "Ishita",
    greet: function () {
      return {
        normal: function () {
          // console.log("Normal:", this.name);
        },
        arrow: () => {
          // console.log("Arrow:", this.name);
        },
      };
    },
  };
  
  const greetFunc = objt.greet();
  greetFunc.normal();
  greetFunc.arrow();

  
  // *******--------******---------------*********-----------*****

  //Ployfill for bind method
  //-> Traditional bind method 

  let normal = {
    name: "Ishi",
    age: 22
  }

  let printInfo = function (hometown, state) {
    // console.log("Name: " + this.name + " & " + "age: " + this.age + hometown + "  " + state)
  }
  
  let printInfoUsingBind = printInfo.bind(normal, "Jammu")
  printInfoUsingBind("Mentally broke");
  
  //implement our own bind somehow
  Function.prototype.mybind = function(...args) {
    let obj = this
    params = args.slice(1);
     return function(...args2) {
       obj.apply(args[0], [...params, ...args2]);
     }
  }


let printUsingOwnBind = printInfo.mybind(normal, "Jammu")
printUsingOwnBind("Mentally stable");

// *******--------******---------------*********-----------*****

//prototypical inheritance, objects, constructors and all 


// function Parent() {}
// Parent.prototype.greet = function () {
//   console.log("Hello from Parent");
// };

// function Child() {}
// Child.prototype = Object.create(Parent.prototype);
// Child.prototype.greet = function () {
//   console.log("Hello from Child");
// };

// const obwj = new Child();
// // delete obwj.greet; -> deleted from obwj only but in next line it's delete from whole Child
// delete Child.prototype.greet;
// obwj.greet();

function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function() {
  // console.log(this.name + " makes a sound.");
};

function Dog(name, breed) {
  Animal.call(this, name); // Inheriting properties
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  // console.log(this.name + " barks!");
};

const doggo = new Dog("Bruno", "Labrador");

// console.log(doggo.constructor === Dog);
// console.log(doggo.constructor === Animal);
doggo.makeSound();
doggo.bark();

//***************************************************************** */


// sayHello();

// function sayHello() {
//   console.log("Hello Ishitaaa!");
// }
// //function declaration are fully hoisted so it runs

// greet();
// //gets hoisted but only the declaration
// var greet = function () {
//   console.log("Good Morning!");
// };

//**************************************************************** */

// var length = 4;

// function callback() {
//   // console.log(this.length);
// }

// const obje = {
//   length: 10,
//   method: function() {
//     arguments[0]();
//   }
// };

// obje.method(callback, 1, 2, 3);

// Create a function createCounter that returns another function. 
// Each time the returned function is called, it should increment and log a counter.

// const createCounter = () => {
//   let count = 0;
//   const inner = function() {
//     console.log(++count)
//   }
//   return inner;
// }

// const counter = createCounter();
// counter();
// counter();

// Make a function greet that takes a name 
// and returns a function that adds a greeting message to that name when called.


// const greet = () => {
//   let name = "ishita";
//  const greetFunc = function() {
//   console.log("hello " + name)
//  } 
//  return greetFunc;
// }

// const capture = greet()
// capture()

//Write a function using a switch statement that redeclares a let variable 
// inside different cases and logs it. Handle errors if redeclaration fails

// let a = 2
// console.log("globally: ", + a);

// switch(a) {
//   case 1: 
//   {
//     let a = 2;
//     console.log("a in case 1: " + a );
//     break;
//   }
//   case 2:
//     {
//       let a = 3
//       console.log("a in case 2: " + a );
//       break;
//     }
// }

// console.log("after switch ", a)

//IIFE FUNCTION___________________________-

// (function() {
//   var count = 10;
//   count++;
//   setTimeout(() => {
//     console.log(count)
//   }, 2000)
// }) ();

//**********interesting ques: does IIFE forms a closure  */

// const counter = (function() {  
//   let count = 0; 

//   return function() { 
//       count++; 
//       console.log("Count:", count);
//   };
// })();  

// counter(); 
// counter();  
// counter();  


// const createCounter = () => {
//   let count = 0;
//   return (function() {
//     console.log(++count)
//   })();
// }

// createCounter();
// createCounter();

//Arrays slice and splice methods practice 
//The slice() method is used to extract a portion of an array without modifying the 
//original array. It returns a new array containing the selected elements.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const sliced = numbers.splice(2,4);

// console.log(sliced);

// The splice() method is used to add, remove, or replace elements in an array. It modifies the original array in place.

// ✅ Key Points:

// Modifies the original array.
// Can be used to remove elements.
// Can be used to add new elements.
// Can be used to replace elements

// const colors = ["red", "blue", "green", "yellow"];
// const removed = colors.splice(1, 2); // Removes 2 elements starting from index 1

// console.log(removed); // Output: ["blue", "green"]
// console.log(colors);  // Modified array: ["red", "yellow"]

// const fruits = ["apple", "banana", "grape"];
// fruits.splice(1, 0, "mango", "orange"); // Adds at index 1

// console.log(fruits); // Output: ["apple", "mango", "orange", "banana", "grape"]

// const numberss = [10, 20, 30, 40];
// numbers.splice(1, 2, 25, 35); // Replaces 2 elements at index 1

// console.log(numberss); // Output: [10, 25, 35, 40]


//-----------------************-----------------************-----------------************-----------------************

//--> first class functions in js

const greet = function(name) {
  return `Hello, ${name}!`;
};

const sayHii = greet; // Assigning function to a variable
console.log(sayHii("Ishita")); // Hello, Ishita!


//--->first order function in js

function add(a, b) {
  return a + b; // Only returns a value, not a function
}

console.log(add(5, 3)); // 8

//--> higher order functions in js

function greet() {
  return function(name) {  // Returns a function
    return `Hello, ${name}!`;
  }
}
//or:

//accepts a function as an argument
function greet(name) {
  return `Hello, ${name}!`;
}

function callGreet(func, name) { // Accepts a function as an argument so this is a higher order function
  return func(name);
}

//----> unary function in js

const square = x => x * x; // Unary function (only one parameter)
console.log(square(4)); // 16

//---> currying in js

function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curryAdd(2)(3)(4)); // 9

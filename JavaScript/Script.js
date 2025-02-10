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


  
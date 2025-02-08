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
console.log(add(2)(4)(6)) //this is currying. if we dont have any parameter, it wont execute

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
        console.log(username, "logged in successfully")
    }
    else console.log("Incorrect password");
}

let step1 = loginUser("ishitaraina18")
let step2 = step1("pass123");



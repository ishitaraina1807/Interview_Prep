// // 1. Create a clone of an object (shallow copy)
// const employee = { id: 101, name: "Alice", position: "Developer" };

// const clone = Object.assign({}, employee); //can use {...employee} as well

// clone.position = "senior dev";
// Object.assign(clone, {department:"Engineering"})

// // console.log(employee)
// // console.log(clone);

// //2. Merging 2 objects 

// const user1 = {name: "Ishita", age: 20};
// const user2 = {age: 22, city: "Jammu"}

// const merge = {...user1, ...user2};

// Object.assign(merge, {country : "India"});

// // console.log(merge)

// //Creating a shallow copy and deep copy of an object

// const products = { 
//     name: "Laptop", 
//     specs: { ram: "8GB", storage: "512GB" }, 
//     price: 1000 
//   };

//   const shallow = {...products};

//   shallow.specs.ram = "4GB";
// //   console.log(shallow)

//   const deep = JSON.parse(JSON.stringify(products));
//   deep.specs.ram = "16GB";
// //   console.log(deep)
// //   console.log(products)

// //3. Update nested object property

// const user = {
//     id: 101,
//     name: "Alice",
//     address: {
//       street: "123 Main St",
//       city: "New York",
//       postalCode: "10001"
//     }
//   };

// // function updateAddress (obj, newAddress) {
// //   obj.address = newAddress
// // } this one is wrong if there are keys missing in new address

// function updateAddress(obj, newAddress) {
//     Object.keys(newAddress).forEach(key => {
//       if (newAddress[key] !== undefined) {
//         obj.address[key] = newAddress[key];
//       }
//     });
//   }

// const newAddress = { street: "456 Oak Rd", city: "Los Angeles" };
// updateAddress(user, newAddress);
// // console.log(user);

// //4. Merging multiple objects

// const object1 = { name: "Alice", age: 25 };
// const object2 = { age: 30, city: "New York" };
// const object3 = { country: "USA" };

// const merged = {...object1, ...object2, ...object3}
// // console.log(merged)

// //5. Add or Remove Nested Property

// const product = {
//     id: 101,
//     name: "Laptop",
//     details: {
//       ram: "8GB",
//       storage: "512GB",
//       color: "Silver"
//     }
//   };

// const updateProd = (obj, property, value) => {
//     if (value === null) {
//         delete obj.details[property]; 
//     } else if (obj.details.hasOwnProperty(property)) {
//         obj.details[property] = value;
//     } else {
//         obj.details[property] = value;
//     }
// }

// updateProd(product, "ram", "16GB");    // Update 'ram'
// updateProd(product, "weight", "1.5kg"); // Add 'weight'
// updateProd(product, "color", null);    // Remove 'color'

// // console.log(product);  

// //6. Update Property in Nested Object: ##IMPORTANT

// const college = {
//     name: "XYZ University",
//     department: {
//       name: "Computer Science",
//       hod: {
//         name: "Dr. Smith",
//         position: "Head of Department"
//       },
//       students: [
//         { name: "Alice", age: 22 },
//         { name: "Bob", age: 23 }
//       ]
//     }
//   };

//   function updateProperty(obj, key, value) {
//    let count = 0; //to keep the track of how many times key appears

//    //recursive function to traverse the object
//    function traverse (currentObj){
//     if(currentObj && typeof currentObj === 'object'){
//         if(currentObj.hasOwnProperty(key)){
//             count++
//             if(count > 1) return -1;
//             currentObj[key] = value;
//         }
//         for(let subKey in currentObj){
//             if(currentObj.hasOwnProperty(subKey)){
//                 const result = traverse(currentObj[subKey]);
//                 if(result === -1) return -1;
//             }
//         }
//     }
//    }
//    const result = traverse(obj);
//    if(count === 0) return -1;
//    return obj;
//   }

//   updateProperty(college, "nonexistent", "Updated Name");
// //   console.log(college)

// //7. Flattening an Object:

// // --> watch video

//------------Different ways of creating an object

//1. using object literals - easiest way 
var obj = {
  name: "ishita",
  age: "something"
}
//2 - Object constructor - simplest way to create an empty object 
var object = new Object();
//Object() is a built-in constructor function so "new" keyword is not required. 
var object = Object();
//3 - Object's creat method 
//create a new object by passing the specified prototype object and properties as arguments, 
//i.e., this pattern is helpful to create new objects based on existing objects
//second argument is optional and it is used to create properties on a newly created object
var object = Object.create(null);
let vehicle = {
  wheels: '4',
  fuelType: 'Gasoline',
  color: 'Green'
}
let carProps = {
  type: {
    value: 'Volkswagen'
  },
  model: {
    value: 'Golf'
  }
}

var car = Object.create(vehicle, carProps); //Object.create(proto, [propertiesObject])
console.log(car);

//4 - Function constructor

function Person(name, age){
  this.name = name;
  this.age = age
}
var object = new Person("Sudheer", 20);
//5 - function with prototype:

//This is similar to function constructor but it uses prototype for their properties and methods,

function Person() {}
Person.prototype.name = "Sudheer";
var object = new Person();

//Object's assign method:copy all the properties from one or more source objects and stores them into a target object.
const orgObject = { company: 'XYZ Corp'};
const carObject = { name: 'Toyota'};
const staff = Object.assign({}, orgObject, carObject);
console.log(staff);
//difference between create and assign:
//Object.create() creates a new object with the specified prototype object and properties. and 
//Object.assign() copies the properties from one or more source objects to a target object.

function greet(role) {
  console.log(`Hello, I am ${this.name} and I work as a ${role}.`);
}

const person = { name: "Ishita" };

greet.call(person, "Developer"); 

const numbers = [1, 5, 3, 9, 2];
console.log(Math.max.apply(null, numbers)); 

//Math.max() is a built-in JavaScript function that takes multiple numerical arguments like:
// Math.max(1, 5, 3, 9, 2); 


//  Object Literals
const mySym = Symbol("Hello");

const myUser = {
  name: "Mickey",
  "full name": "Mickey Bro",
  age: 28,
  [mySym]: "World", //properly input sybol as a key or else it will input as string
  email: "Mickey@Google.com",
  isLoggedIn: false,
  daysLoggedIn: ["Monday", "Tuesday"],
};

//console.log(myUser.age);        //  primitive way of accesing objects     //Mickey
console.log(myUser["name"]); //Mickey
console.log(myUser["full name"]); //can access keys if defined in string     //Mickey Bro
console.log(myUser[mySym]); //Accessing symbol     //World

myUser.email = "Mickey@Hotmail.com";
console.log(myUser);
/*OUTPUT 
{
  name: 'Mickey',
  'full name': 'Mickey Bro',
  age: 28,
  email: 'Mickey@Hotmail.com',
  isLoggedIn: false,
  daysLoggedIn: [ 'Monday', 'Tuesday' ],
  [Symbol(Hello)]: 'World'
}
*/

//Object.freeze(myUser)       //  prevents any change to the object
myUser.email = "Mickey@yahoo.com";
console.log(myUser);
/*OUTPUT 
{
  name: 'Mickey',
  'full name': 'Mickey Bro',
  age: 28,
  email: 'Mickey@Hotmail.com',
  isLoggedIn: false,
  daysLoggedIn: [ 'Monday', 'Tuesday' ],
  [Symbol(Hello)]: 'World'
}
*/

myUser.greetings = function () {
  //  declaring a function in an object
  console.log("Hello World");
};
console.log(myUser.greetings()); //Hello World

myUser.greetingsTwo = function () {
  console.log(`Hello, this is ${this["full name"]} , email : ${this.email}`); //  using "this" keyword to refernce the current object
};
console.log(myUser.greetingsTwo()); //  Hello, this is Mickey Bro , email : Mickey@yahoo.com

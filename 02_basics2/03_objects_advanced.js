//const myUser=new Object()     //  declares a singleton object
//const myUser={}         //  declares a non-singleton object
//console.log(myUser);        //  {}

const myUser = {
  UserName: {
    fullname: {
      firstname: "Mickey",
      lastname: "Bro",
    },
  },
};

console.log(myUser);
console.log(myUser?.UserName); //  "?" returns value if present
console.log(myUser.UserName.fullname);
console.log(myUser.UserName.fullname.firstname);

/* Nesting of Objects (child)

{ UserName: { fullname: { firstname: 'Mickey', lastname: 'Bro' } } }
{ fullname: { firstname: 'Mickey', lastname: 'Bro' } }
{ firstname: 'Mickey', lastname: 'Bro' }
Mickey

*/

const a = { 1: "a", 2: "b" };
const b = { 3: "c", 4: "d" };
const c = { 5: "e", 6: "f" };

const d = Object.assign({}, a, b, c); //  assign ( Target (empty object {}) , Source (other objects) ) to join two or more objects
console.log(d); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const e = { ...a, ...b, ...c }; // using spread operator, better, faster, newer
console.log(e); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const myUser1 = {
  name: "Mickey",
  "full name": "Mickey Bro",
  age: 28,
  email: "Mickey@Google.com",
  isLoggedIn: false,
  daysLoggedIn: ["Monday", "Tuesday"],
};

//printing all the keys in an array
console.log(Object.keys(myUser1)); //[ 'name', 'full name', 'age', 'email', 'isLoggedIn', 'daysLoggedIn' ]

//printing all the values in an array
console.log(Object.values(myUser1));
/* [
  'Mickey',
  'Mickey Bro',
  28,
  'Mickey@Google.com',
  false,
  [ 'Monday', 'Tuesday' ]
] */

//printing all the values of an objects in an array
console.log(Object.entries(myUser1));
/* [
    [ 'name', 'Mickey' ],
    [ 'full name', 'Mickey Bro' ],
    [ 'age', 28 ],
    [ 'email', 'Mickey@Google.com' ],
    [ 'isLoggedIn', false ],
    [ 'daysLoggedIn', [ 'Monday', 'Tuesday' ] ]
  ] */

console.log(Object.hasOwnProperty("name")); //returns true or flase if a key is present or not



/* **************************** Object De-Structure ***************************** */

const {name}=myUser1        // {name of property}=(from object)
const {name:fullname}=myUser1
console.log(name);      //Mickey
console.log(fullname);      //Mickey



























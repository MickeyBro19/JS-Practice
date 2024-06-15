// FOR OF

const arr = [1, 2, 3, 4, 5, 6, 7];

for (const val of arr) {
  // console.log(val);
}

/*  OUTPUT

1
2
3
4
5
6
7 

*/

const greetings = "Hello World!";

for (const str of greetings) {
  //console.log(str);
}

//  MAPS   {Stores unique values and in order of input}
//      FOROF loop works with map not objects

const map = new Map();
map.set("IN", "India");
map.set("FR", "France");
map.set("SA", "South Africa");

for (const [key, value] of map) {
  ///  array destructure
  //console.log(key," : ",value);
}

/*  OUTPUT

IN  :  India
FR  :  France
SA  :  South Africa

 */

//  FORIN loop
//     OBJECTS

const myobj = {
  js: "Javascript",
  cpp: "C++",
  py: "Python",
  rb: "Ruby",
};

for (const key in myobj) {
  //console.log(key," : ",myobj[key]);
}

/* OUTPUT

js  :  Javascript
cpp  :  C++
py  :  Python
rb  :  Ruby 

*/

/* 
for..in iterates over all enumerable property keys of an object
for..of iterates over the values of an iterable object

*/

//  <----------------------------------FOR..EACH loop-------------------------------------->

const prog = ["js", "ruby", "cpp", "c#", "python"];

prog.forEach(function (val) {
//   console.log(val);
});

/*  OUTPUT 

js
ruby
cpp
c#
python

*/

prog.forEach((val) => {
  //  arrow function
//   console.log(val);
});

/*  OUTPUT 

js
ruby
cpp
c#
python

*/

function printMe(val) {
//   console.log(val);
}

prog.forEach(printMe); // passing a function in for...each loop

/*  OUTPUT 

js
ruby
cpp
c#
python

*/

const coding = [
  {
    programmingLang: "Javascript",
    programmingName: "js"
  },
  {
    programmingLang: "Java",
    programmingName: "java"
  },
  {
    programmingLang: "Python",
    programmingName: "py"
  }
];

coding.forEach((item)=>{
    console.log(item.programmingLang);
})
//  array

const arr=[0,1,2,3,4,"Mickey",true]   //arrays are resizable , can store multiple types of data , can be accessed used indexing(0-based)
const arr1=["apples", "grapes"]
const arr2 =new Array(1,2,3,4,5)

console.log(arr)
console.log(arr1)
console.log(arr2)

/* OUTPUT

[ 0, 1, 2, 3, 4, 'Mickey', true ]
[ 'apples', 'grapes' ]
[ 1, 2, 3, 4, 5 ]

 */

//   Array methods

const myArr=[0,1,2,3,4]

myArr.push(7)            // adding element at the start
console.log(myArr)       //   [ 0, 1, 2, 3, 4, 7 ]

myArr.pop()              //removing element at the end
console.log(myArr);      //  [ 0, 1, 2, 3, 4 ]

myArr.unshift(10)        //adding element at the start
console.log(myArr);      //  [ 10, 0, 1, 2, 3, 4 ]

myArr.shift()        //removing element at the start
console.log(myArr);      //  [ 0, 1, 2, 3, 4 ]

myArr.includes(5)       //searches for value at an array
myArr.indexOf(3)        //returns index of element

const newArr=myArr.join()       //converts array into string
console.log(myArr);        //[ 0, 1, 2, 3, 4 ]
console.log(newArr);        //0,1,2,3,4

//slice :splits an array to the given coordinates (doesnt include the end)
//splice: splits the array into given coordinates , includes the ends and removes the spliced part from the original array



/* *************************arrays advanced*************************** */

const fruits=["apple","banana","grapes"]
const veg=["potato","radish","carrot"]
const flowers=["rose","tulip","hibiscus"]

// fruits.push(veg);       //push operator   //arrays in array
console.log(fruits);        //[ 'apple', 'banana', 'grapes', [ 'potato', 'radish', 'carrot' ] ]

const concat=fruits.concat(veg)       //concat operator   //joins two arrays
console.log(concat);        //[ 'apple', 'banana', 'grapes', 'potato', 'radish', 'carrot' ]

const spread=[...fruits,...veg,...flowers]          //joins two or more arrays together
console.log(spread);        //['apple','banana','grapes','potato','radish','carrot','rose','tulip','hibiscus']

const a=[1,2,3,[4,5],6,[7,8,[9,10]]]
console.log(a.flat(Infinity))       //flattens all jagged arrays  //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(Array.from("MICKEY"))       //creats an array from an iterable object       //[ 'M', 'I', 'C', 'K', 'E', 'Y' ]

let a1=100
let a2=200
let a3=300
let a4=400

console.log(Array.of(a1,a2,a3,a4))      //creates array from multiple elements      //[ 100, 200, 300, 400 ]












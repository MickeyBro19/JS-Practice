function Name() {
  console.log("M");
  console.log("I");
  console.log("C");
  console.log("K");
  console.log("E");
  console.log("Y");
}

Name; //  reference of the function
//Name(); //  function execution
/* OUTPUT
M
I
C
K
E
Y
 */

function add(n1, n2) {
  //function with passing arguments to the parameters and returning the result
  return n1 + n2;
}
console.log(`Result : ${add(2, 3)}`); //  Result : 5

function name(name = "Bro") {
  //function with default parameter
  return name;
}
console.log(name("Mickey")); //Mickey

function cart(val1, val2, ...val3) {
  //here "..." means rest operator , same as spread but it combines all the values in a single array
  console.log(val1);
  console.log(val2);
  return val3;
}
console.log(cart(100, 200, 400, 5000, 3000, 6000));
/* OUTPUT
val1:100
val2:200
val3:[ 400, 5000, 3000, 6000 ]
*/

function user(user){
    return `name : ${user.username} , age : ${user.age}` 
}
console.log(user({
    username:"Mickey",
    age:28
}))                 //  name : Mickey , age : 28

function arr(arr){
    console.log(`1st : ${arr[0]}, 2nd : ${arr[1]}`)
}
arr([200,100,400]);                 //  1st : 200, 2nd : 100
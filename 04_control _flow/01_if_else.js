//      IF

if(true){       //  if(condition){statement}
    console.log(`hello`);
}

/* 
    Conditions--->
    >
    <
    >=
    <=
    ==
    !=
    ===        // checks the type also
    !==        // checks for negative sign
*/

//      IF-ELSE

if(4<0){
    console.log(`greater`);
}
else{
    console.log(`lesser`);
}
 
// IF-ELSE IF

 
let a=10
if (a<5) {
    console.log(`less`);
} 
else if (a>5) {
    console.log(`more`);
}
else {
    console.log(`equals`);
}

/* 
    if(true){               // Truthy If (assumed to be true)
        console.log(`hello`);
    }



    Falsy values(assumed to be false)-->
    false, 0, -0, BigInt 0n, "", null, undefined, NaN

    except all the above, all are truthy values
    
    Truthy values-->
    "0", "false", " ", [], {}, function(){}
*/


/* 
    use length operator to check empty arrays
    const a=[]
    if(a.length===0){

    }

    use .keys to obtain array of key of an object and then use .length operator to check empty objects
    const b={}
    if (Object.keys(b).length===0) {
        console.log(`empty`);
    }
 */

// Nullish Coalescing Operator(??) : null undefined

let val1;
val1=5 ?? 10
val1=null ?? 10
val1=undefined ?? 15
console.log(val1);
//returns output for values and omits if null or undefined is given


//  Ternary Operator
//condition ? true : false

const num=10
//condition ? true                 : false
      num>5 ? console.log(`great`) : console.log(`less`);

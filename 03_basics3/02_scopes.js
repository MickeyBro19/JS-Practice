let a =100      //global scope

if(true){
    let a=10
    const b=20
    var c=30        //should not be used , doesnt support block scoping

    console.log(a);     //block scoped
    console.log(b);     //block scoped
}

console.log(a);

/*  OUTPUT
10      //inner a
20      //inner b
100     //outer a
 */



//      nested scope

function one(){
    const username="Mickey"

    function two(){
        const web="github"
        console.log(username);

    }
    //console.log(web);
    two()
}

one()

//      HOISTING

console.log(addone(5));
function addone(num){
    return num+1
}


const addtwo=function(num){         ///FUNCTION HOISTING
    return num+2
}
console.log(addtwo(5))
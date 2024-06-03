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
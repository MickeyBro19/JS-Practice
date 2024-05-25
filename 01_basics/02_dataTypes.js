"use strict"; //treat all JS code as newer version

//alert(3+3) // popup's the log message in a popup window


let a="Hello"
let b=10
let c=true
let d
let e=null

console.table([typeof(a),typeof(b),typeof(c),typeof(d),typeof(e)])

/* OUTPUT

┌─────────┬─────────────┐
│Variables│ Datatypes   │
├─────────┼─────────────┤
│ a       │ 'string'    │
│ b       │ 'number'    │
│ c       │ 'boolean'   │
│ d       │ 'undefined' │
│ e       │ 'object'    │
└─────────┴─────────────┘

*/

/*

1. Primitive data types => number, string, boolean, null, undefined   { Stack => Stores a copy of original value in a new container, chamges made doesn't alter the origonal value }
2. Reference data types => arrays, objects, function  (type needs to be defined)   { Heap => Stores the refernce of the original value, changes made alters the original value }
    const friuts =["apples", "bananas", "litchies"]        => array
    let user={
        name="Mickey",
        age=20
    }                                                      => object
    let myFunc=function(){
        console.log("Hello World!")
    }                                                      =>function

*/
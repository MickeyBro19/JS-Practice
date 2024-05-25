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
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 'string'    │
│ 1       │ 'number'    │
│ 2       │ 'boolean'   │
│ 3       │ 'undefined' │
│ 4       │ 'object'    │
└─────────┴─────────────┘

*/
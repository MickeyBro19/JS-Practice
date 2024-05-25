const accountId=12345678
//variable data can't not be changed

let accountEmail="Hello@google.com"
//uses scope to reduce ambiguity

var accountPassword="12345"//preferred not to use
//previously used to declare variable , not uses scope concept

accountCity="Durgapur"
//isn't recommended

let accountState
//if no value isn't given it refers to undefined state

accountEmail="FC@Gmail.com"
accountPassword="33434343"
accountCity="Pune"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


/*  OUTPUT

┌─────────┬────────────────┐
│ (index) │ Values         │
├─────────┼────────────────┤
│ 0       │ 12345678       │
│ 1       │ 'FC@Gmail.com' │
│ 2       │ '33434343'     │
│ 3       │ 'Pune'         │
│ 4       │ undefined      │
└─────────┴────────────────┘

*/
const user={
    username:"Mickey",

    welcomemsg:function(){
        console.log(`${this.username} , Welcome to JS`)
    }
}

user.welcomemsg()
user.username="Max"
user.welcomemsg()

/*  output
Mickey , Welcome to JS
Max , Welcome to JS
 */

// const addtwo=function(num){          //normal function       
//     return num+2
// }
// console.log(addtwo(5))

const addtwo=(num)=>{                   //arrow function
    return num+2                //explicit return
}
console.log(addtwo(5))


const addnum=(num1,num2) => (num1+num2)     //implicit return
console.log(addnum(2,3));
//  Immediately Invoked Function Expression(IIFE)
        //to reduce global scoping pollution and invoke immediately

function name1(){
    console.log(`hello`);
}
name1() ;               /// Traditonal way to call a function


(function name2(){          // Named IIFE
    console.log(`hello world`);
})()     ;               //IIFE 

/* always end a function calling with ";" or else it can cause issue */


(()=>{console.log(`hello world Mickey`);})();       // Unnamed IIFE

((name)=>{                                      // parameterised IIFE
    console.log(`Hello, ${name}`);
})('Mickey');

/*  Output 
hello
hello world
hello world Mickey
Hello, Mickey
 */
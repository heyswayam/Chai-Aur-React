// Immediately Invoked Function Expressions (IIFE)
//wrap the funtion around paren, and add another parent for exec.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   //if we have multiple iife, then without ;, iife wont work

//passing args works simillarly
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
//        node 03_Basics/04_iife.js
// Immediately Invoked Function Expressions (IIFE)....

// function chai(){
//     console.log(`DB CONNECTED..`)
// }
// chai()

(function chai(){ //named iife..
    console.log(`DB CONNECTED..`)
})();

//syntax: 
// (//func defination) (execution)
//semicolon at end to end the function..

( ()=>{ //simpe iife..
    console.log(`DB CONNECTED TWO`)
}) ();


((name) => {  //simple iife with parameter..
    console.log(`DB CONNECTED TO ${name}`)
}) ("Vikrant")
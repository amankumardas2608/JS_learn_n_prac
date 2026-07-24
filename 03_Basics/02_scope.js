//       node 03_Basics/02_scope.js
// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// {} //scope

var c = 150; //global scope..
//block scope..
if(true){
    let a = 10
    const b = 20
    c = 30
}
// console.log(a);
// console.log(b);
// console.log(c);


let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log("inner value", a)
}
// console.log(a)

//nested scope........................................
//chota bada se icecream maang sakta hai but bada chota sa chote se icecream nhi maang sakta....
// function one(){
//     const username = "Aman"
//     function two(){
//         const website = "youtube"
//         console.log(username)
//     }
//     // console.log(website)
//     two()
// }
// one()

//nowing using if.....
if(true){
    const username = "Aman"
    if(username === "Aman"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

//-------------------------interesting concept-----------------------------------------

console.log(addone(5))
function addone(num){ //declaration
    return num + 1
}
// addone(5)

addtwo(5)
const addtwo = function(num){ //declaration with variable hold
    return num + 2
}
// addtwo(5)
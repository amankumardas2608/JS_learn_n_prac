//here no comparison takes place....
// const useremail = "ak268d@gmail.com"
// const useremail = ""
const useremail = [] //empty arr ko true maan liya h....there is a rule actually.
if(useremail){
    console.log(`user got one email name..`)
} else {
    console.log("user has not got any email name...")
}

//NOTE-
// falsy values...
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values...(jo bhi falsy nhi hai )
// "0", 'false', " ", ' ', [], { } //empty obj., function(){}

// if(useremail.length === 0){
//     console.log("arr is empty....")
// }

const emptyobj = {}
// Object.keys(emptyobj) => ye return karega ek arr jisme keys honge obj ki..
if(Object.keys(emptyobj).length === 0){
    console.log("Object is empty....")
}

//Nullish coalescing Operator (??): null undefined...
//NOTE- Nullish Coalescing (??): Returns the right value only if the left value is null or undefined; otherwise returns the left value.

// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 56;
// // val1 = undefined ?? 1478654231579
// val1 = null ?? 10 ?? 15 //null ke jo phela hoga value wo assign ho jayega..

// console.log(val1)

// Terniary Operator...................................................
//syntax..
// condition ? true : false
const price = 79;
price > 80 ? console.log("Greater than 80") : console.log("less than 80")
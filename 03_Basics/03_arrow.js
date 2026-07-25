//   node 03_Basics/03_arrow.js
const user = {
    username: "Aman", 
    price: 462,
    welcomemsg: function(){
        console.log(`${this.username}, welcome to website`) //this=>refers to the current context.
        console.log(this)
    }
}
// user.welcomemsg()
// // user.welcomemsg()
// user.username = "sam" //context changed...(kiske baare me baat ho rha hai)
// user.welcomemsg()

// console.log(this) //empty object

// function chai(){
//     let username = "Aman"
//     console.log(this.username)
// }
// chai()

// const chai = function(){
//     let username = "Aman"
//     console.log(this.username)
// }
// chai() //undefined again..

//arrow function...
const chai = () => {
    let username = "Aman"
    console.log(this)
}
// chai()

//arrow func syntax...
// () => {}

// const addnums = (a, b) => {
//     return a+b
// }    
// console.log(addnums(10, 61))

//implicit return....

// const addnums = (a, b) => a+b   
// console.log(addnums(10, 61))

//another way..
// const addnums = (a, b) => (a+b)  
// console.log(addnums(10, 61))
//curly braces me wrap kara toh return keyword likhna padega..na toh aise yaha likhne ki need ni hai..

const addnums = (a, b) => ({username: "Aman"})  
console.log(addnums(10, 61))


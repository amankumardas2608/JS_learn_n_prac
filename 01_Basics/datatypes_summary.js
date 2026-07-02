//1.Primitive datatype-

//---------------------------7 types------------------------------------------
    // String 
    // Number
    // boolen
    // null
    // undefined
    // Symbol
    // BigInt

//Note - JavaScript is a dynamically typed language
//       because variable types are determined at runtime 
//       and a variable can hold values of different types
//       during execution.

//prac
const score = 100;
const scorevalue = 100.456;
const isloggedin = true;
const outsidetemp = null;
let useremail;
const id = Symbol('1234')
const anotherId = Symbol('1234');
console.log(id === anotherId);
const bignumber = 56165194156216519516519841651654198541551498541561n;
console.log(bignumber);

//2. Non Primitive datatype => Reference type
    //Array
    //Objects
    //Functions

//prac-
const heroes = ["shaktiman", "nagraj", "doga"]     // array - ref type
//object->
let myinfo = {
    name: "Aman",
    age: 21
};

//function->
// by varible
const myfunc /*storing*/ = function(){
    console.log("Hello world");
}

console.log(typeof bignumber);
console.log(typeof outsidetemp); //object as O/P
console.log(typeof scorevalue);
console.log(typeof myfunc); //actual O/P -> function object
console.log(typeof myinfo);
console.log(typeof id);

// -----------------------------------------------------------------------------------------

// Stack (Primitive), Heap (Non-Primitive)-------------------------------------------------

let myname = "Aman";
let anothername = myname;
anothername = "Rahul"
console.log(myname); //Aman 
console.log(anothername); //Rahul

//Heap example---------------------------------------------------------------------
let userone = {
    name : "Aman",
    age : 22
};

let anotheruser = userone;
anotheruser.name = "Vaishnavi"
anotheruser.age = 21;
console.log(userone);
console.log(anotheruser);
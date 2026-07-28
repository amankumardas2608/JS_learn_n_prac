// if 
const isuserloggedin = true

// if(true){

// } //false hua toh scope ke andar nhi jjayenge ..

// if(isuserloggedin){

// }

// comparision op..
// <, >, <=, >=, ==, !=, ===

// if(2 == "2"){
//     console.log("exexuted....")
// }
// triple equal hota toh nhi ata 

// const temp = 46
// if(temp < 50){
//     console.log(`less than 50...`)
// }
// else{console.log(`temp is greater than 50`)}

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`user power ${power}`)
// }
// console.log(`user power ${power}`) //power is not def.

// const balance = 1000
// if(balance > 500) console.log("test"); //implicit scope.... you cant write multiple line na toh comma lagale but unreadable code hojayega...

// const balance = 1000
// if(balance < 500){
//     console.log("less than")
// }
// else if(balance < 750){
//     console.log("less than 750")
// }
// else if(balance < 900){
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }

const userloggedin = true
const debitcard = true
const male = true 
const loggedinfromgoogle = false
const loggedinfromemail = true
if(userloggedin && debitcard && male && 2*6 == 12){
    console.log("allow to buy course...")
}

if(loggedinfromemail || loggedinfromgoogle){
    console.log("allow to buy course...")
} //u can also write multiple values check in the condition...

//----------------------------------[24:18]-----------------------------------------
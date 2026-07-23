// node 03_Basics/01_functions.js
// console.log("A")
// console.log("M")
// console.log("A")
// console.log("N")

function saymyname(){ // func def.
console.log("A")
console.log("M")
console.log("A")
console.log("N")
}

// saymyname //func refernce..
// saymyname() //executes

function addtwonums(num1, num2){ //parameters has passed here..
    console.log(num1+num2)
}
// addtwonums(4, 16) //args..
// addtwonums(4, "16")
// addtwonums(4, "a")
// addtwonums(4, null)

const res = addtwonums(10, 20)
// console.log(res) //undefined

//......now see........

function addtwonums(num1, num2){
    
    let result = num1 + num2
    // console.log("akd")
    return result //iske baad koi kaam nhi karega...
    // console.log("akd")
}
const result = addtwonums(10, 20)
// console.log("Result:",result) 

// //another method
// function addtwonumsagain(num1, num2){
    
//    return num1+num2
// }

// function loginusermsg(username){
//     if(username === undefined){ //can also write the condition as !username..
//         console.log("Please enter a username....")
//         return
//     }
//     return `${username} has just logged in....`
// }

// loginusermsg("Vikansh") // func executes and value returned...but not printed
// const name = loginusermsg("Vikansh")
// console.log(name)
// console.log(loginusermsg(""))
// console.log(loginusermsg()) //undefined has just logged in 

// function loginusermsg(username = "akdd"){
//     if(!username){
//         console.log("Please enter a username....")
//         return
//     }
//     return `${username} has just logged in....`
// }
// const name = loginusermsg("Vikansh")
// console.log(name)
// console.log(loginusermsg(""))
// console.log(loginusermsg())
// console.log(loginusermsg("Gorge"))

//.............funcs with objs............................

// function calculatecarprice(num1){
//     return num1
// }

// console.log(calculatecarprice(200))
// console.log(calculatecarprice(200, 100, 600))

//rest oper (...)
function calculatecarprice(...num1){
    return num1
}

// console.log(calculatecarprice(200, 100, 600, 4000)) //arr type format
// function calculatecarprice(val1, val2, ...num1) //200 n 100 val1 n val2 me chala jaayega and output aayega 600 n 4000

const userinfo = {
    username: "Aman",
    college: "DTU",
    fees: 242000
}
function handleobject(student){
    console.log(`Username is ${student.username} and he is pursuing his btech from ${student.college} and its fees is ${student.fees}.`)
}
handleobject(userinfo)
handleobject({
    username: "Vikrant", college: "nsut", fees: 275000
})

//passing arr

const mynewarr = [200, 400, 600, 800, 1000]
function returnsecondvalue(getarr){
    return getarr[1]
}
console.log(returnsecondvalue(mynewarr))
console.log(returnsecondvalue([1, 495, 2, 36]))
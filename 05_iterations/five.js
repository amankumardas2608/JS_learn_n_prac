//for each loop...

const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( function (i) {   //func ka naam nhi likhna hai....
//     console.log(i);
// }  )

// coding.forEach( (i) => {
//     console.log(i)
// })

// function printMe(i){
//     console.log(i)
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })

const mycode = [
    {
        langname : "javascript",
        langfile : "js"
    },
    {
        langname : "java",
        langfile : "java"
    },
    {
        langname : "python",
        langfile : "py"
    }
]

mycode.forEach( (item) => {
    console.log(item.langname);
})
// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item)
//     return item
// }) 

// console.log(values) //returns nothing->undefined..

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newnums = nums.filter( (i) => i>4)
// console.log(newnums)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newnums = nums.filter( (i) => { return i>4})
// console.log(newnums) //agr scope laagaya diya toh return keyword likhna hee padega same jab function me padha tha 

//now using for each loop................................................................................
const newnums = []
nums.forEach((i)=>{
    if(i>4){
        newnums.push(i)
    }
} )
console.log(newnums)

//filter aur bhi kaamo ke liye...

// => go through video till 17:40..(lect_30)....Baaaki notes likh liye hai...refer to the notebook.
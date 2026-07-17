//arrays- can be stored a collection of items...size can be resizeable..
//stored elements can be either same or diff..

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[2])
//shallow copy n deep copy..(dekhna ek baar isee)

const myheros = ["spiderman", "ironman", "doctorstrange"]
const myarr2 = new Array(15, 58, 95, 66, 24, 35)
// console.log(myheros[2])

//Array_Methods---------------------------------------------------------------------
// myArr.push(15468)
// myArr.push(88)
// myArr.pop() //last ele remove

console.log(myArr)
myArr.unshift(44) // aagr value aajata aur baaki value ek ek aage shift ho jata...
console.log(myArr)
myArr.shift() //elements ek ek aage aajate hai and phela element del ho jata...
console.log(myArr)
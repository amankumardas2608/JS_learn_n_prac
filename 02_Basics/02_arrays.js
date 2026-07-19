// node 02_Basics/02_arrays.js
const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]
// marvel_heroes.push(dc_heroes) //array inside array..
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][0]) // superman as output..

//merging.........................
// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes) //same thing - array inside array

const allheroes = marvel_heroes.concat(dc_heroes)
console.log(allheroes)

//other way - spread operator => ...

const all_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_heroes)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_arr = another_array.flat(Infinity)
console.log(real_another_arr)


console.log(Array.isArray("aman")) //checking of array
console.log(Array.from("aman")) //making arr..
console.log(Array.from({name: "Aman"})) //empty arr...interesting case....

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))

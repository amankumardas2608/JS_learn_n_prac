const name = "Aman"
const repocount = 50
// console.log(name + repocount)
// console.log(name + repocount + " value")
// console.log(name + " " + repocount + " value")

//printing output using backtrack - string interpolation---try to use this....
// console.log(`hello my name is ${name} and my repo count is ${repocount} `)
// console.log(`hello my name is ${name} and my repo count is ${repocount}. `)

//declation of string - method 2
// const gamename = new String ('Aman')
// console.log(gamename)
// console.log(gamename.valueOf()) //Aman

// console.log(gamename[2]);
// console.log(gamename.__proto__); //object

const sname = "saurabh-hc"
console.log(sname.length);
console.log(sname.toUpperCase());
//note - no change in origninal string....

console.log(sname.charAt(4))
console.log(sname.indexOf('h'))
const partstring = sname.substring(0, 4);
console.log(partstring)
const spartstring  = sname.slice(-8,4);
console.log(spartstring);
const nameone = "    Aman      ";
console.log(nameone);
console.log(nameone.trim());

const sentence = "hello my name is Aman Kuxxx Das"
console.log(sentence.replace("xxx", "mar"));
console.log(sentence.includes("Kuxxx"));
console.log(sentence.includes("wipro"));

//sting to array--------------------------------------------------

const stringname = "aman-raj-vaibhav-suresh-vansh";
console.log(stringname.split('-'));



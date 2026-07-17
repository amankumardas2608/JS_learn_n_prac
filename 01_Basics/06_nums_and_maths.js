// node 01_Basics/06_nums_and_maths.js
const score = 400
// console.log(score)

//explictly define 
const onescore = new Number(400);
// console.log(onescore);

// console.log(onescore.toString());
// console.log(typeof onescore);
// console.log(typeof onescore.toString());
// console.log(onescore.toString().length);
const num = 100.6548941;
// console.log(num.toFixed(4))

const othernum = 84.9264
// console.log(othernum.toPrecision(2))
// console.log(othernum.toPrecision(3))
//precision means mujhe  precise value chaie but
//kitni value pe focus karna hai jitna tu input dega..

const numread = 165151156184;
// console.log(numread.toLocaleString());
// console.log(numread.toLocaleString("en-IN"));

//----------------------------------------------MATHS----------------------------------------------------------------------------------------------
// node 01_Basics/06_nums_and_maths.js

// console.log(Math)
// console.log(Math.abs(-4.6))
// console.log(Math.round(4.6));
// console.log(Math.round(4.4));
// console.log(Math.floor(8.7));
// console.log(Math.ceil(8.8));
// console.log(Math.round(4.5));
// console.log(Math.sqrt(6));
// console.log(Math.sqrt(6).toFixed(2));

// console.log(Math.min(10, 20, 30, 5))
// console.log(Math.max(10, 20, 30, 5))

console.log(Math.random()); //always btw 0 and 1.
console.log(Math.random()*10); //Before decimal => 1 number.
console.log(Math.random()*100); //Before decimal => 2 number.
console.log(Math.random()*1000); //Before decimal => 3 number.

console.log((Math.random()*10) + 1); //Min value 1 aayega 0 toh nhi aayega decimal ke phele...
console.log(Math.floor(Math.random()*10) + 1); //same hai bas round off kar deta toh the lowest value..ek hee random no. aayega

//Random values btw any two nums(IMP)---------------------------------------------------------------------------------------------------
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) 

let score = "Aman";
// console.log(typeof score);

let valueinnumber = Number(score);
// console.log(typeof valueinnumber);
// console.log(valueinnumber); //output NaN => not a number..

//----CONCLUSION----
// "33" => 33
// "33abc" => NaN
// true => 1 / false => 0;

let isloggedin = "A";
let booleanisloggedin = Boolean(isloggedin);
// console.log(typeof booleanisloggedin);
// console.log(booleanisloggedin);

//----CONCLUSION----
// 1 => true / 0 => false
// "" => false
// "Aman" => true

let somenumber = 10;
let stringnumber = String(somenumber);
// console.log(typeof stringnumber);
// console.log(stringnumber);

//-------------------------OPERATIONS------------------------------------------

let value = 3;
let negvalue = -value;
// console.log(negvalue);

//some basic math operations---------------------------------------------------------------

// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2*2);
// console.log(2**3);
// console.log(2%3);

//tricky things-----------------------------------------------------------------------------
let str1 = "Aman";
let str2 = " Kumar";
let str3 = " Das";
// let connect = str1 + str2 + str3;
// console.log(connect); 

//confusing operations-----------------------------------------------------------------------
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(3+4*5%3); //these all are not used practically so dont write like this....

//some more conversions-----------------------------------------------------------------------

// console.log(true);//output = true
// console.log(+true); // = 1
// // console.log(true+); // = error
// console.log(""); //empty output
// console.log(+""); //0

let num1, num2, num3;
num1 = num2 = num3 = 4*2;
// console.log(num1); console.log(num2); console.log(num3); 
// readibility is not there so
// its bad habit writing like this.

let gamecounter = 100;
++gamecounter; //prefix operator
console.log(gamecounter);
gamecounter++; //postfix operator
console.log(gamecounter); 



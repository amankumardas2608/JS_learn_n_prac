// Dates..  node 01_Basics/07_datesntime.js
let myDate = new Date(); //created an object..
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate)

let mycreateddate = new Date(2023, 0, 26)
// console.log(mycreateddate)
// console.log(mycreateddate.toDateString())
// console.log(mycreateddate.toLocaleDateString())

//Date and time now..
let mycreateddatentime = new Date(2023, 0, 26, 10, 25)
// console.log(mycreateddatentime.toLocaleString())
//yy mm dd syntax..
let mydate = new Date("2026-12-16")
// console.log(mydate)
// console.log(mydate.toLocaleString())

//mm dd yy - indian format

mydate = new Date("02-01-2004")
// console.log(mydate.toLocaleString())

//timestamps in date...
let mytimestamps = Date.now()
// console.log(mytimestamps)
// console.log(myDate.getTime()); //uss date se time niakala..
// console.log(Date.now());
// console.log(Date.now()/1000); //in secs
// console.log(Math.floor(Date.now()/1000));

//more methods...

let newdate = new Date()
console.log(newdate)
console.log(newdate.getMonth() + 1) // jan = 0 index
console.log(newdate.getDay() + 1) // mon = 0 index

//detail customization of date n time...(imp).
newdate.toLocaleString('default', {
    //object 
    weekday: "long"
})
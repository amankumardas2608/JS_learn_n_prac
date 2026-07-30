//for loop..

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is the best number")
//     }
//     console.log(element)
// }
// console.log(i) //can access

for(let i = 1; i <= 10; i++){
    //console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value ${j}`)
        const table = i + '*' + j + '=' + i*j;
        //console.log(table)
        
    }
}

// let myarr = ["flash", "batman", "superman"]
// console.log(myarr.length)
// for (let index = 0; index < myarr.length; index++) {
//     const element = myarr[index];
//     console.log(element)
    
// }

//break and continue....
// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         console.log(`detected 5`)
//         break
//     }
//     console.log(`value of i is ${i}`)
// }

// for (let i = 1; i <= 20; i++) {
//     if(i == 13){
//         console.log(`detected 5`)
//         continue
//     }
//     console.log(`value of i is ${i}`)
// }


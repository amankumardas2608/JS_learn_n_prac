//syntax....
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3 //mar
// switch (month) {
//     case 1:
//         console.log("Jan")
//         break;
//     case 2:
//         console.log("feb")
//         break;
//     case 3:
//         console.log("mar")
//         break;
//     case 4:
//         console.log("apr")
//         break;

//     default: //else jaisa maanle....
//         console.log("default case match...")
//         break;
// } //note - break nhi hota toh waha se last tak code exexute ho jata(agr aage walo me bhi brak nhi hai) accept default..


const month = "mar"
switch (month) {
    case "jan":
        console.log("Jan")
        break;
    case "feb":
        console.log("feb")
        break;
    case "mar":
        console.log("mar")
        // break;
    case "apr":
        console.log("apr")
        break;
    case "may":
        console.log("may")
        break;
  
    default:
        console.log("default case match...")
        break;
}
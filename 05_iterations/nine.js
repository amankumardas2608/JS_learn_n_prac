//reduce..........................
// const nums = [1, 2, 3, 4]
// const x = nums.reduce( (accumulator, currentvalue) => accumulator+currentvalue,0 )
// console.log(x)

// const nums = [1, 2, 3, 4]
// const x = nums.reduce( (a, b) => a+b,0 )
// console.log(x)

// const nums = [1, 2, 3, 4]
// const x = nums.reduce( function (accumulator, currentvalue) {
//     console.log(`acc: ${accumulator} and curr_val: ${currentvalue}`)
//     return accumulator+currentvalue},0 )
// console.log(x)

const sc = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "python course",
        price: 999
    },
    {
        itemname: "mobile dev course",
        price: 5999
    },
    {
        itemname: "data science course",
        price: 12999
    }
]
// sc.reduce((acc, cuval) => acc + cuval.price, 0)
console.log(sc.reduce((acc, cuval) => acc + cuval.price, 0))
const total_price = sc.reduce((acc, i) => acc + i.price, 0)
console.log(total_price)
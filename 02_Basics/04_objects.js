// node 02_Basics/04_objects.js
const tinderuser = new Object() //singelton 
const tinderuserr = {} //non-singelton
// console.log(tinderuser)
// console.log(tinderuserr)

tinderuser.id = "00012"
tinderuser.name = "Sandy"
tinderuser.isloggedin = true
// console.log(tinderuser)

const regularuser = {
    email: "ak268d@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aman",
            lastname: "Kumar"
        }
    }
}
// console.log(regularuser.fullname)
// console.log(regularuser.fullname.userfullname)
// console.log(regularuser.fullname.userfullname.firstname)

//comboining objects---------------------------------------------

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2} //array wala problem..
// const obj3 = Object.assign(obj1, obj2)
const obj4 = Object.assign({}, obj1, obj2)

// console.log(obj4)

// console.log(Object.assign({}, obj1, obj2, obj3))

const total = {...obj1, ...obj2, ...obj3} //simple and latest.
// console.log(total)

const users = [
    {
        id: 1,
        email: "ak268d@gmail.com"
    },
    {
        id: 1,
        email: "ak268d@gmail.com"
    },
    {
        id: 1,
        email: "ak268d@gmail.com"
    }
]

users[1].email
// console.log(tinderuser);
// console.log(Object.keys(tinderuser)) //datatype - array
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))

// console.log(tinderuser.hasOwnProperty('isloggedin'))
// console.log(tinderuser.hasOwnProperty('age'))

//destrucuting

const course = {
    coursename: "js in hindi",
    price: "999",
    courseteacher: "pranav"
}
// course.courseteacher
const {courseteacher} = course
console.log(courseteacher)
const {courseteacher: ins} = course
console.log(ins)

//a liitle discussionn on react....
//destructure....

// const navbar = ({company}) => {

// }
// navbar(company = "Aman")

//api...................................................
//json structure

// {
//     "name" : "Aman",
//     "coursename" : "physics",
//     "price" : "free"
// }

//apis in arr format....
[
    {},
    {},
    {}
]

{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}
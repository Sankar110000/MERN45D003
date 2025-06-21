// decaltreration
function myFunc(){
    console.log('This is my fucntion');
}

// myFunc();

// typesof function
// 1. named function
// 2. expression fucntion
// 3. arrow fucntion
// 4. call back function
// 5. hgiher order fucntion

// expression fucntion
let expFunx = function () {}

// arrow function
let arrowFunc = () => {}

// hgiher order function

function printName() {
    console.log("Sankar");
}
// printName("Sankar")

// callback function

function hgiherorderFunx(callbakcFunx){
    callbakcFunx()
}

hgiherorderFunx(printName)


// array fucntions

// 1. foreach
// 2. map
// 3. filter
// 4. reduce


let arr = [1, 2, 3, 4, 6]

// for (ele of arr){
//     console.log(ele);
// }

// arr.forEach((ele, idx, array) => {
//     console.log(ele, "....", idx);
    
// })

const newArr = arr.map((ele) => {return ele*5})
console.log(newArr);

const filteredArry = arr.filter((ele) => ele%2 == 0)
console.log(filteredArry);

const sum = arr.reduce((acc, curr) => {
    return curr+acc
}, 0);


// target an element

const h1 = document.querySelector('html')

console.log(h1);

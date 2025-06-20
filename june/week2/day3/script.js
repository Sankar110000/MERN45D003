

let student = {
    name :"Sankar",
    age: 20,
}

// const arr = new Array([1, 2, 3, 4, 5, 6]);
// console.log(typeof arr);

// const arr2 = [1, 2, 3, 4, 5]
// console.log(typeof arr2);

// for (const key in student) {
//     console.log(student[key]);
    
// }

// for (const idx in arr) {
//     console.log(arr[idx]);
// }

// for (const element of arr) {
//     console.log(element);
// }

// strings
let str = "    S  tr  ing"
let str2 = 'string'
let str3 = `str`

str[1] = '2'
console.log(str.length);

// methods
console.log(str.split(''));
const newStr = str.replace(" ", "g")
const subString = str.substring(0, 4)
console.log(new String('Sankar'));


// array
let arr = [1, 2, 3, 4, 5,6 ,7 ,8, 9]
arr.unshift(0)
arr.shift(1)
arr.splice(2, 5, 30)

const companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.shift()
// companies.splice(2, 1, "Ola")
companies.push('Amazon');
console.log(companies);



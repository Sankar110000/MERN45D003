// Events
// const btn = document.querySelector('button')
// const input = document.querySelector('input')

// btn.onclick = () => {
//     alert('button clicked')
// }

// btn.onkeyup = () => {
//     alert("Clicked");
// }

// input.addEventListener("change", (e) => {
//     console.log(`the value is ${e.target.value}`);
// })

const string = JSON.stringify({name: "sankar", age: 20});
console.log(typeof JSON.parse(string));


// create an element
const div = document.querySelector('div');
const para = document.createElement("p");
const div2 = document.createElement("div");
div2.innerHTML = "Thiss is a div";
para.innerHTML = "Paragraph"
div.append(para)

const body = document.querySelector('body')
body.appendChild(div2)


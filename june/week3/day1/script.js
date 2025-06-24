// function getData(userId,next = () => {}) {
//     let data;
//     setTimeout(() => {
//         console.log(`User id ${userId}`);
//         next()
//     }, 2000)
// }
// // callback hell
// getData(1, () => {
//     getData(2)
// })

// promises
// ---------states----------
// pending
// resolve
// reject

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject()
//     }, 3000)
// })

getUserData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Userid ", userId);
      // resolve("resloved")
      reject("rejected");
    }, 2000);
  });
};

// getUserData(1)
// .then((res) => {
//     console.log(res);
// }).catch(e => console.log(e))

async function fetchData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/todos/");
  let jsonRes = await data.json()
 console.log(jsonRes);
 
}

fetchData()
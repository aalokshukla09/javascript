// Javascript is a single threaded synchronous language

// console.log("First");
// let sum = 0;
// for(let i=0;i<3000000000;i++)
//     sum+=i;

// console.log(sum);
// console.log("Last");



// console.log("Hello Ji");

// setTimeout(() => {
//     console.log("Time Out Executed");
// }, 5000);

// console.log("I am the end");



// console.log("Hi Ji");

// const button1 = document.getElementById("button1");
// button1.addEventListener('click',()=>{
//     console.log("Button 1 is clicked");
// });

// const button2 = document.getElementById("button2");
// button2.addEventListener('click',()=>{
//     console.log("Button 2 is clicked");
// });

// const button3 = document.getElementById("button3");
// button3.addEventListener('click',()=>{
//     console.log("Button 3 is clicked");
// });

// console.log("I am the end");


// console.log("Start the Operation");

// fetch("https://api.github.com/users").then(()=>{
//     console.log("Git Hub user info");
// })

// console.log("end of operation");


// 1️⃣ Execute synchronous code → Call Stack
// 2️⃣ Async task → Web API
// 3️⃣ Promise → Microtask Queue
// 4️⃣ Timer/Event → Callback Queue
// 5️⃣ Call Stack empty?
// 6️⃣ Execute ALL Microtasks
// 7️⃣ Execute ONE Callback task
// 8️⃣ Repeat from 5️⃣


console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

// Call Stack:
// Start → printed

// Web APIs:
// Timeout 1
// Timeout 2

// Microtask Queue:
// Promise
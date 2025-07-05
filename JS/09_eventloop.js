// // single threaded
// // Synchronous

// // console.log("hellop");
// // console.log("world");

// //Asynchronous

// console.log("hello");

// const fn = () => {
//   console.log("This is async");
// };

// setTimeout(fn, 0); // its in milisecond // fn , time

// console.log("World");

// // concept event loop, call stack

// // web apis
// // setTimeout, setInterval, dom, fetch,

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback executed");
}, 0);

console.log("End");

const promises = new Promise((resolve, reject) => {
  reject("Perfect");
});

promises
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

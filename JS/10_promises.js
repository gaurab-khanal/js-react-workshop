// promises is used when we dont know actual value that is returned by a function
// it can return answer or an error
// has three states:
// pending
// fulfilled
// rejected

// helps to perform asynchronous task
// like fetching data, sending emails
// or anything that has external dependency than our core code.

// example use case: database, api request, email sending
// database arkai server run bhako hunxa and hamro program arkai server/
// emaill send.

// email sending program
// gaurab@gmail body : hello
// gmail as a service provider which sends actual email.
// here we are just providing the address and body to gmail.
// now its upto gmail how to send that email.

// promises returns either:
// resolve-> success
// reject -> failure

// const promises = new Promise((resolve, reject) => {
//   let success = false;

//   if (success) {
//     resolve("Data fetch success");
//   } else {
//     reject("Data fetch unsuccessful");
//   }
// });

// promises.then((data) => console.log(data)).catch((error) => console.log(error));

// actual data fetching

// fetch("https://685ffdd9c55df675589fd54b.mockapi.io/api/v1/student")
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Network response wsnt ok");
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//

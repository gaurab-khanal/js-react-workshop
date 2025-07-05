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

// async await provides abstraction for promises .then , .catch syntax

async function dataFetch() {
  const response = await fetch(
    "https://685ffdd9c55df675589fd54b.mockapi.io/api/v1/student"
  );
  const data = await response.json();
  console.log(data);
  const dataArr = data.map((element) => {
    return element.name;
  });

  console.log(dataArr);
}

dataFetch();

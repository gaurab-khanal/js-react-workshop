for (let i = 0; i < 10; i++) {
  console.log(i);
}

let a = 0;
while (a <= 10) {
  console.log(a);
}

let age = 18;

if (age < 18) {
  console.log("Not allowed to vote");
} else {
  console.log(" allowed to vote");
}

let day = 1;

if (day === 1) {
  console.log("Sunday");
} else if (day === 2) {
  console.log("Monday");
} else if (day === 3) {
  console.log("Tuesday");
} else if (day === 4) {
  console.log("Wednesday");
} else if (day === 5) {
  console.log("Thursday");
} else if (day === 6) {
  console.log("Friday");
} else if (day === 7) {
  console.log("Saturday");
} else {
  console.log("Invalid day");
}

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}

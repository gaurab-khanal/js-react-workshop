// Datatypes
// 1. Primitives (Value type)
// Primitives (value types)

// - string, number, bigint, boolean, undefined, null
// - string(length, toUpperCase(), includes(), split(), slice(0,4))

// let name = "gaurab"; // string
// let roll = 123; // number
// let isPassOut = false; // boolean
// let bigNumber =
//   21972148238818823882109802383124124341234124213424212341423432434324n; // bigInt
// console.log(bigNumber);

// represents absence of value
// let bio;
// console.log(bio); // undefined

// bio = "Gaurab Khanal"; // defined// value is present

// bio = null;

// dynamic types language

// let f = "fdsfds";
// f = 898;

//// 2. Non- Primitive (Reference type)

//// array, objects, functions

//// Array

// let classes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(classes[9]);

// console.log(classes.push(11));

// console.log(classes); // 11

// console.log(classes.pop());

// console.log(classes.shift(10))
// console.log(classes.unshift())

// console.log(classes);

//// Objects key: value

// const college = {
//   name: "CCT",
//   location: "Dharan",
//   Course: "CSIT",
//   SeniorSemester: 7,
// };

// console.log(college);
// console.log(college.name);
// console.log(college["name"]);

// // after some months

// college.SeniorSemester = 8;

// console.log(college);

// const values = Object.values(college);
// console.log(values);

// value vs refrence type

// let a = 10;
// let b = 20;

// b = a; // 10

// a = 30;

// console.log(a);
// console.log(b);

// reference type

// let c = [1, 2, 3];

// let d = [4, 5, 6];

// d = c; // c ko actual memory location ko value d ma assign hunxa

// console.log(d);

// c[0] = 100;

// console.log(d);

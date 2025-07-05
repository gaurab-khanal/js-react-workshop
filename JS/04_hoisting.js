// hoisting is a property in JS
// which allows to access variable/function before its declaration

console.log(a);
const a = 123;

hello();

function hello() {
  console.log("Hwllo world");
}

// JS is executed on Global Execution Context

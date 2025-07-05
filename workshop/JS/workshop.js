// hoisting is a property in JS
// which allows to access variable/function before its declaration

var a = 123;
console.log(a);

hello();

function hello() {
  console.log("Hwllo world");
}

// JS is executed on Global Execution Context

function Welcome(name) {
  console.log(`Welcome ${name}`);
}

Welcome("to workshop");

// first class citizens
// functions can be stored in variable as well

let hello = function () {
  console.log(`Hello`);
};

hello();

let sum = (a, b) => {
  console.log(a + b);
};

sum(4, 5);

// IIFE (Immediately Invoked Function Execution)

(function cct() {
  console.log("CCT");
})();

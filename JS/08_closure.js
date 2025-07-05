// a property of js functions
// which allows a functin to
// remember its outer function variables

function outer() {
  let a = 10;
  console.log("outer executing");

  function inner() {
    console.log("Inside Inner");
    console.log(a);
  }

  return inner;
}

const storefn = function hello() {
  console.log("Hello");
};

storefn();

const storeInner = outer();

storeInner();

// counter

function createCounter() {
  let count = 0;

  function increaseCount() {
    count++;
    console.log(count);
  }

  return increaseCount;
}

const counter = createCounter();
counter();
counter();
counter();
counter();
counter();
counter();

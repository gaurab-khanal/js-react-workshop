let a = 20;

{
  let a = 30;
  console.log(a);
}

let name = "Gaurab";
function hello() {
  function PrintHello() {
    console.log("Hello,", name);
  }

  PrintHello();
}

hello();

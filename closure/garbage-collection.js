function f() {
  let value = 123;

  return function() {
    alert(value);
  }
}

let g = f();// while g function exists, the value stays in memory

let arr = [f(), f(), f()] //  functions in array, every one of them links to Lexical Environment
// from the corresponding f() run

g = null; // ...and now the memory is cleaned up
arr = null; // same here

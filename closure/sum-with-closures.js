/*Write function sum that works like this: sum(a)(b) = a+b.

Yes, exactly this way, using double parentheses (not a mistype).*/

function sum(arg1) {
  return function (arg2) {
    return arg1 + arg2;
  }
};

console.log(sum(5)(-1));

// recursion is called it self.

// 1

function factorial(num) {
  if (num < 0) {
    return "factorial is not defined for negative numbers";
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(8));

// 2

function power(base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return base * power(base, exp - 1);
  }
}
console.log(power(2, 5)); 
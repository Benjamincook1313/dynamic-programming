

// Exponential Time O(2^n) very slow 
// Space O(n)

const fib = (n) => {
  if(n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
};

// TAIL RECURSION fibonacci O(1) *** Super Fast ***
const fibon = (n) => { 
  let go = (n, a, b) => {
    if(n === 0) return a
    return go(n - 1, b, a+b)
  };

  return go(n, 0, 1)
};




console.log(fibon(6))
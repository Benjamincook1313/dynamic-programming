
// const fib = (n) => {
//   const arr = [1, 1]
//   for(let i=0; i<=n; i++){
//     arr.push(arr[i] + arr[i + 1])
//   }
//   return arr.pop()
// };

// RECURSIVE O( 2^n )
const fib = (n) => {
  if(n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
};



console.log(fib(7))
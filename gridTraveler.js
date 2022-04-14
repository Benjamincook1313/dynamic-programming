
// O(2^n) EXPONENTIAL slow run time
function gridTraveler(m,n, memo = {}){
  if(m === 1 && n === 1) return 1
  if(m === 0 || n === 0) return 0

  return gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
};

// O(n) LINEAR run time much faster
function gridTraveler(m,n, memo = {}){
  const key = m + ',' + n
  // base cases
  if(key in memo) return memo[key]
  if(m === 1 && n === 1) return 1
  if(m === 0 || n === 0) return 0

  // recursive call decrementing m and n
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)

  return memo[key]
};


//            (2,3)
//           /     \
//      (1,3)      (2,2)
//     /   \       /    \
// (0,3) (1,2)   (1,2)   (2,1)
//      /  \     /    \    /  \
//   (0,2)(1,1)(0,2)(1,1)(1,1)(0,0)

console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(3, 2)) // 3
console.log(gridTraveler(3, 3)) // 6
console.log(gridTraveler(18, 18)) // 2333606220
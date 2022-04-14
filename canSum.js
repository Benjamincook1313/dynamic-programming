

function canSum(target, numArr, memo = {}){
  if(target === 0) return true
  for(let num of numArr) {
    if(!target in memo) return memo[target]
    let remainder = target - num
    if(canSum(remainder, numArr, memo) === true) {
      return true
    }
  }
  return false
};

console.log(canSum(7, [5, 3, 4, 7]))
console.log(canSum(7, [2, 4]))
/*
Write a function that, when passed an array and a target sum, returns, efficiently with respect to time used, two distinct zero-based indices of any two of the numbers, whose sum is equal to the target sum. If there are no two numbers, the function should return null. For example, findTwoSum([3, 1, 5, 7, 5, 9], 10) should return an array containing any of the following pairs of indices:
 */

const findTwoSum = (numbers = [], target = 0) => {
  let hash = {};

  for (let [index1, num1] of numbers.entries()) {
    let num2 = target - num1;
    if (hash[num2] !== undefined && !!num1 && !!num2)
      return [index1, hash[num2]];
    hash[num1] = index1;
  }

  return null;
};

console.log(findTwoSum([3, 1, 5, 7, 5, 9], 10));

/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

import { assert } from "chai";

export const findOutlier = (integers: number[]): number => {
  const evens: number[] = [];
  for (const i of integers)
    if (i % 2 === 0) {
      evens.push(i);
      if (evens.length > 1) break;
    }
  if (evens.length === 1) return evens[0];

  let odds = [];
  for (const i of integers)
    if (i % 2 !== 0) {
      odds.push(i);
      if (odds.length > 1) break;
    }
  if (odds.length === 1) return odds[0];

  return -1;
};

it("Simple tests", function () {
  assert.equal(findOutlier([0, 1, 2]), 1);
  assert.equal(findOutlier([1, 2, 3]), 2);
  assert.equal(findOutlier([2, 6, 8, 10, 3]), 3);
  assert.equal(findOutlier([0, 0, 3, 0, 0]), 3);
  assert.equal(findOutlier([1, 1, 0, 1, 1]), 0);
});

/*  
A Company performing an analysis on the computers at one of its offices. The computers are spaced along a single row. The analysis is performed in the following way: Choose a contiguous segment of a certain number of computers, starting from the beginning of the row. Analyze the available hard disk space on each of the computers. Determine the minimum available disk space within this segment. After performing these steps for the first segment, it is then repeated for the next segment, continuing this procedure until the end of the row (i.e. if the segment size is 4, computers 1 to 4 would be analyzed, then 2 to 5, etc.) Given this analysis procedure, write an algorithm to find the maximum available disk space among all the minima that are found during the analysis.
Input
The input consists of three arguments:
numComputer: an integer representing the number of computers
hardDiskSpace: a list of integers representing the hard disk space of the computers
segmentLength: an integer representing the length of the contiguous segment of computers to be considered in each iteration

Output
Return an integer representing the maximum available disk space among all the minima that are found during the analysis.
Examples
Input:
numComputer = 3
hardDiskSpace = [62, 64, 77, 75, 71, 60, 79, 75]
segmentLength = 4
Output: 64


*/
import { assert } from "chai";

const test = (x: number, space: number[]) => {
  const mins = [];
  let arr = [];
  for (let c = 0; c < space.length; c++) {
    const slice = space.slice(c, c + x);
    if (slice.length !== x) break;
    arr[c] = slice;
    const slice_min = Math.min(...slice);
    mins.push(slice_min);
  }

  const max = Math.max(...mins);

  console.log({ x, space, arr, mins, max });
  return max;
};

describe("solution", function () {
  it("should handle basic tests", function () {
    assert.strictEqual(test(4, [62, 64, 77, 75, 71, 60, 79, 75]), 64);
    assert.strictEqual(test(2, [8, 2, 4, 6]), 4);
    assert.strictEqual(test(1, [1, 2, 3, 1, 2]), 3);
    assert.strictEqual(test(2, [1, 1, 1]), 1);
  });
});

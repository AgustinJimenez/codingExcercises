/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

import { assert } from "chai";

export class Challenge {
  static getMiddle(s: string) {
    const midIndex = s.length / 2;
    if (s.length % 2 === 0) return s.substring(midIndex - 1, midIndex + 1);
    else return s.substring(midIndex, midIndex + 1);
  }
}

function test(string, expected) {
  assert.strictEqual(Challenge.getMiddle(string), expected);
}

describe("solution", function () {
  it("should handle basic tests", function () {
    test("test", "es");
    test("testing", "t");
  });
});

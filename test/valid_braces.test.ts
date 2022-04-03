/*  
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
What is considered Valid?

A string of braces is considered valid if all braces are matched with the correct brace.
Examples

"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False


*/
import { assert } from "chai";

const validBraces = (braces: string) => {
  let stack = [];
  const openBraces = ["{", "(", "["];
  const closeBraces = ["]", "}", ")"];
  for (const c of braces)
    if (openBraces.includes(c)) stack.push(c);
    else if (
      closeBraces.includes(c) &&
      !!stack.length &&
      openBraces.includes(stack[stack.length - 1])
    )
      stack.pop();

  return stack.length === 0;
};

describe("solution", function () {
  it("should handle basic tests", function () {
    assert.strictEqual(validBraces("()"), true);
    assert.strictEqual(validBraces("[(])"), false);
    assert.strictEqual(validBraces("(){}[]"), true);

    assert.strictEqual(validBraces("([{}])"), true);

    assert.strictEqual(validBraces("(}"), false);
    assert.strictEqual(validBraces("[(])"), false);
    assert.strictEqual(validBraces("[({})](]"), false);
  });
});

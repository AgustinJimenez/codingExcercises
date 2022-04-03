/*  
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals
*/
/* 
import { assert } from "chai";

export const solution = (number: number): string => {
  const romanSimbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let romanNumber = "";
  const romanSimbolsArr = Object.keys(romanSimbols);
  while (number > 0)
    romanSimbolsArr.map((romanSimbol, simbolKey) => {
      const simbolValue = romanSimbols[romanSimbol];
      console.log("COMPARING ===> ", { simbolValue, number });
      if (simbolValue > number) {
        const prevSimbol = romanSimbolsArr[simbolKey - 1];
        const prevSimbolValue = romanSimbols[prevSimbol];
        number -= prevSimbolValue;
        romanNumber = `${romanNumber}${prevSimbol}`;
      }
    });

  return romanNumber;
};

describe("solution", () => {
  it("basic", () => {
    assert.equal(solution(1000), "M", '1000 should == "M"');
    assert.equal(solution(4), "IV", '4 should == "IV"');
    assert.equal(solution(1), "I", '1 should == "I"');
    assert.equal(solution(1990), "MCMXC", '1990 should == "MCMXC"');
    assert.equal(solution(2008), "MMVIII", '2008 should == "MMVIII"');
    assert.equal(solution(1444), "MCDXLIV", '1444 should == "MCDXLIV"');
  });
});
 */

const solution = (number: number): string => {
  const romanSimbols: any = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let output: string = "";
  for (let simbol in romanSimbols) {
    const value = romanSimbols[simbol];
    console.log("ITERATION ===> ", { value, number });
    while (value >= number) {
      output += simbol;
      number -= value;
    }
  }

  return output;
};

console.log(
  solution(2008) //'MMVIII'
);

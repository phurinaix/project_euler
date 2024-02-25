/**
 Consider quadratic Diophantine equations of the form:
      x^2 - Dy^2 = 1
 For ex, when D = 13, the minimal solution in x is 649^2 - 13 * 180^2 = 1.
 it can be assumed that there are no solutions in positive integers when D is square.
 By finding minimal solutions in x for D = {2, 3, 5, 6, 7}, we obtain the following.
      3^2 - 2 * 2^2 = 1
      2^2 - 3 * 1^2 = 1
      9^2 - 5 * 4^2 = 1
      5^2 - 6 * 2^2 = 1
      8^2 - 7 * 3^2 = 1
 Hence, by considering minimal solutions in x D <= 7, the largest x is obtained when D = 5.
 Find the value of D <= 1000 in minimal solutions of x for which the largest value of x is obtained.
*/

const isSquareNumber = (number) => number ** 0.5 % 1 === 0;

const findDiophantineSolutionA = (number) => {
  /* Straightforward method 
   * very slow
   * */

  /**
    x^2 - Dy^2 = 1
    Dy^2 = x^2 - 1
    y^2 = (x^2 - 1)/D
    y = ((x^2 - 1)/D)^(1/2)
  */
  const D = number;
  let result = { x: 1, y: 1 };
  while (1) {
    const y = ((result.x**2 - 1)/D)**0.5
    const isYAnInteger = y % 1 === 0;
    if (y !== 0 && isYAnInteger) {
      result.y = y;
      break;
    }
    result.x++;
  }
  return result;
}

const findDiophantineSolutionB = (number) => {
  /* fraction expansion & matrix exponentiation method
   * [x Dy]
   * [y x]
   * */
    const D = BigInt(number);
    let m = 0n;
    let d = 1n;
    let a = BigInt((Number(D)**0.5)|0);
    let [x0, x] = [1n, a];
    let [y0, y] = [0n, 1n];

    // x^2 - Dy^2 = 1
    while (x*x - D * y*y !== 1n) {
        m = d * a - m;
        d = (D - m*m) / d;
        a = (BigInt((Number(D)**0.5)|0) + m) / d;

        [x0, x] = [x, a * x + x0];
        [y0, y] = [y, a * y + y0];
    }

    return { x: Number(x), y: Number(y) };
}

const main = (maxNumber) => {
  let Dvalue = 2;
  let largestX = 0;
  for (let i = 2; i <= maxNumber; i++) {

    if (isSquareNumber(i)) continue;
    // const { x } = findDiophantineSolutionA(i); /* take around 30 - 40 minutes */
    const { x } = findDiophantineSolutionB(i);
    if (x > largestX) {
      largestX = x;
      Dvalue = i;
    }
  }
  return Dvalue;
}

// test Diophantine function
console.log(findDiophantineSolutionA(7)) // expected x = 8, y = 3
console.log(findDiophantineSolutionA(13)) // expected x = 649, y = 180

console.log(findDiophantineSolutionB(7)) // expected x = 8, y = 3
console.log(findDiophantineSolutionB(13)) // expected x = 649, y = 180

// test main
console.log(main(7)) // expected 5
console.log(main(1000)) // expected 661

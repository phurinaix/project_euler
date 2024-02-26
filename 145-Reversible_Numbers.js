/**
  Some positive integers n have the property that the sum [n + reverse(n)] consists entirely of odd (decimal) digits.
  For instance, 36 + 63 = 99 and 409 + 904 = 1313. We will call such numbers reversible; so 36, 63, 409, and 904 are reversible.
  Leading zeroes are not allowed in either n or reverse(n).
  
  There are 120 reversible numbers below one-thousand.

  How many reversible numbers are there below one-billion (10^9)?
*/

// bruteforce solution
const isReversible = (number) => {
  const numStr = number.toString();
  let carry = 0;
  for (let i = 0; i < numStr.length; i++) {
    const lastDigit = number % 10;
    const sum = +numStr[i] + lastDigit + carry;
    // console.log("++++", d, numStr[i], sum, carry);
    if (sum % 2 == 0) return false;

    carry = sum > 9;
    number = (number / 10) | 0;
  }
  return true;
};

const main = (maxNumber) => {
  let count = 0;
  // iterate over odd numbers
  for (let i = 1; i < maxNumber; i += 2) {
    if (isReversible(i)) {
      count += 2;
    }
  }
  return count;
};

console.log(main(1000)); // expected 120
// 10**8 < number < 10**9 - no solutions
console.log(main(1e8)); // expected 608720

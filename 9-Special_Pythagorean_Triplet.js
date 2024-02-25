/**
  A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
    a^2 + b^2 = c^2
  For ex, 3^2 + 4^2 = 9 + 16 = 25 = 5^2
  There exists exactly one Pythagorean triplet for which a + b + c = 1000
  Find the product abc.
*/

const bruteforceMethod = (sum) => {
  for (let a = 1; a < sum; a++) {
    for (let b = 1; b < sum; b++) {
      const c = (a * a + b * b) ** 0.5;
      if (a + b + c === sum && c % 1 === 0) {
        return a * b * c;
      }
    }
  }
  return 0;
};

console.log(bruteforceMethod(12)); // expected 3*4*5 = 60
console.log(bruteforceMethod(1000)); // expected 200*375*425 = 31875000

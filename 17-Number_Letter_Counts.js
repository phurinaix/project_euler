/**
  If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are
  3 + 3 + 5 + 4 + 4 = 19 letters used in total.
  
  If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

  NOTE: Do not count spaces or hyphens. For ex, 342 (three hundred and forty-two) contains 23 letters & 115
  (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
*/

const nums = {
  0: "",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",

  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",

  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",

  1000: "onethousand",
};

// just handle only number > 0 && <= 1000
const convertNumberToWord = (number) => {
  if (nums[number]) return nums[number];

  const numStr = number.toString();
  if (number < 100) {
    return nums[numStr[0] + "0"] + nums[numStr[1]];
  }

  if (number < 1000) {
    return (
      nums[numStr[0]] +
      "hundred" +
      (number % 100 === 0
        ? ""
        : "and" +
          (nums[Number(numStr[1] + numStr[2])] ||
            nums[numStr[1] + "0"] + nums[numStr[2]]))
    );
  }

  return null;
};

// brute force
const main = (start, end) => {
  let count = 0;
  for (let i = start; i <= end; i++) {
    count += convertNumberToWord(i).length;
  }
  return count;
};

console.log(main(1, 5)); // expected 19
console.log(main(1, 1000)); // expected 21124

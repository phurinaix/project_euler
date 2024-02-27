/**
 Starting in the top left corner of a 2x2 grid, and only being able to move to the right and down,
 there are exactly 6 routes to the bottom right corner.

 How many such routes are there through a 20 x 20 grid ?
*/

// dynamic programming (top-down approach)
const main = (col, row, memo = {}) => {
  const key = `${col}-${row}`;

  if (col === 0 || row === 0) return col + row > 0;

  if (key in memo) return memo[key];

  memo[key] = main(col - 1, row, memo) + main(col, row - 1, memo);
  return memo[key];
};

console.log(main(2, 2)); // expected 6
console.log(main(20, 20)); // expected 137846528820

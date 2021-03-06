/** 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

let sum = 0;
let limit = 10;
for (let i = 3; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}


console.log(sum) // expect 233168

//arithmetic series

// x = (3+limit-1)*((limit/6)|0)
// y = (5+limit-5)*((limit/10)|0)
// z = (15+limit-10)*((limit/30)|0)

// console.log(x)
// console.log(y)
// console.log(z)

// console.error(x+y-z)
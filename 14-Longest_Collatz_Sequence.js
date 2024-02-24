/**
The following iterative sequence is defined for the set of positive integers:
n -> n/2 (n is even)
n -> 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:
13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

it can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been provedyet (Collatz Problem), it is thought that all starting numbers finish at 1.
Which starting number, undre one million, produces the longest chain?
Note: Once the chain starts the terms are allowed to go above one million.
*/
const countCollatzChain = (number) => {
	if (number < 1) return 0;
	let count = 1;
	// TODO: optimize this algorithms
	while (number !== 1) {
		number = number % 2 === 0 ? number / 2 : 3 * number + 1;
		count++;
	}
	return count;
}

const main = (maxNumber) => {
	let currentLongestChain = 1;
	let currentNumberProduceLongestChain = 1;
	for (let i = 1; i < maxNumber; i++) {
		const chainCount = countCollatzChain(i);
		if (chainCount > currentLongestChain) {
			currentNumberProduceLongestChain = i;
			currentLongestChain = chainCount;
		}
	}
	return currentNumberProduceLongestChain;
}

console.log(countCollatzChain(13)); // expected 10

console.log(main(1000000));


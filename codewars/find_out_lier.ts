export function findOutlier(arr: number[]): number | string {
	if (arr.length < 3) {
		return 0;
	}
	const evens = arr.filter((num) => num % 2 === 0);
	const odds = arr.filter((num) => num % 2 !== 0);

	if (evens.length === 1) {
		return evens[0];
	}

	return odds[0];
}

const result1 = findOutlier([2, 4, 0, 100, 4, 15, 2602, 13, 36]); // Output: 11
console.log(result1);

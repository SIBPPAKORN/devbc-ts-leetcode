export function findOutlier(arr: number[]): number {
	const evens = arr.filter((num) => num % 2 === 0);
	const odds = arr.filter((num) => num % 2 !== 0);

	if (evens.length === 1) {
		return evens[0];
	}

	return odds[0];
}

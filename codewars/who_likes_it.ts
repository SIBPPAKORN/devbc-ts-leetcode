export function likes(a: string[]): string {
	if (!Array.isArray(a)) {
		throw new Error("Input must be an array");
	}

	const length = a.length;

	if (length === 0) {
		return "no one likes this";
	}

	if (length === 1) {
		return `${a[0]} likes this`;
	}

	if (length === 2) {
		return `${a[0]} and ${a[1]} like this`;
	}

	if (length === 3) {
		return `${a[0]}, ${a[1]} and ${a[2]} like this`;
	}

	const othersCount = length - 2;
	return `${a[0]}, ${a[1]} and ${othersCount} others like this`;
}

console.log(likes(["poy", "sky", "wp", "qq", "ww", "ee"]));

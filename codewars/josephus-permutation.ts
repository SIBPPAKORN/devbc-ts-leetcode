export const josephus = <T>(items: T[], k: number): T[] => {
	const result: T[] = [];
	let index = 0;

	while (items.length > 0) {
		index = (index + k - 1) % items.length;
		result.push(items.splice(index, 1)[0]);
	}

	return result;
};
// ยากมากกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกสำหรับผม

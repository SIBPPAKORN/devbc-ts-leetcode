export function createPhoneNumber(numbers: number[]): string {
	if (numbers.length !== 10) {
		throw new Error("จำนวนสมาชิกไม่เท่ากับ 10 หรือไม่ โปรดตรวจสอบ");
	}

	const areaCode = numbers.slice(0, 3).join("");
	const firstPart = numbers.slice(3, 6).join("");
	const secondPart = numbers.slice(6, 10).join("");

	return `(${areaCode}) ${firstPart}-${secondPart}`;
}

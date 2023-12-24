import { expect, test } from "bun:test";
import { createPhoneNumber } from "./create_phone_number";

test("Should return the (123) 456-7890", () => {
	expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
});

test("Should return the (062) 126-6297 ", () => {
	expect(createPhoneNumber([0, 6, 2, 1, 2, 6, 6, 2, 9, 7])).toEqual("(062) 126-6297");
});

test("Should return the จำนวนสมาชิกไม่เท่ากับ 10 หรือไม่ โปรดตรวจสอบ", () => {
	expect(createPhoneNumber([0, 8, 2, 1, 2, 6, 6, 9, 7])).toEqual(
		" จำนวนสมาชิกไม่เท่ากับ 10 หรือไม่ โปรดตรวจสอบ ",
	);
});

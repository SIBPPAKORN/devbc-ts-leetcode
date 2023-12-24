import { expect, test } from "bun:test";
import { createPhoneNumber } from "./create_phone_number";

test("Should return the (123) 456-7890", () => {
	expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
});

test("Should return the (062) 116-7145", () => {
	expect(createPhoneNumber([0, 6, 2, 1, 1, 6, 7, 1, 4, 5])).toEqual("(062) 116-7145");
});

test("Should return the จำนวนสมาชิกไม่เท่ากับ 10 หรือไม่ โปรดตรวจสอบ ", () => {
	expect(createPhoneNumber([2, 3, 4, 5, 6])).toEqual("จำนวนสมาชิกไม่เท่ากับ 10 หรือไม่ โปรดตรวจสอบ");
});

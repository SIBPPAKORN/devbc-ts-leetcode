import { expect, test } from "bun:test";
import { createPhoneNumber } from "./create_phone_number";

test("Should return the (123) 456-7890", () => {
	expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual("(123) 456-7890");
});

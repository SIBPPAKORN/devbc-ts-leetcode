import { expect, test } from "bun:test";
import { findOutlier } from "./find_out_lier";

test("Should return the 15", () => {
	expect(findOutlier([34, 15, 80, 2])).toEqual(15);
});

test("Should return the 55", () => {
	expect(findOutlier([55, 60, 0, 10, 60, 90, 72])).toEqual(55);
});

test("Should return the 2", () => {
	expect(findOutlier([11, 57, 91, 35, 13, 69, 81, 2])).toEqual(2);
});

test("Should return the 0", () => {
	expect(findOutlier([11, 57])).toEqual(0);
});

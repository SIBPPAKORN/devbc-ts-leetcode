import { expect, test } from "bun:test";
import { josephus } from "./josephus-permutation";

test("Should return the smallest int [2, 4, 6, 1, 5, 3, 7]", () => {
	expect(josephus([1, 2, 3, 4, 5, 6, 7], 2)).toEqual([2, 4, 6, 1, 5, 3, 7]);
});

test("Should return the smallest int [5, 3, 2, 4, 7, 1, 6]", () => {
	expect(josephus([1, 2, 3, 4, 5, 6, 7], 5)).toEqual([5, 3, 2, 4, 7, 1, 6]);
});

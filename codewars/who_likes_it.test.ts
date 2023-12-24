import { expect, test } from "bun:test";
import { likes } from "./who_likes_it";

test("Should return the no one likes this ", () => {
	expect(likes([])).toEqual("no one likes this");
});

test("Should return the poy  likes this ", () => {
	expect(likes(["poy"])).toEqual("poy likes this");
});

test("Should return the poy and sky like this ", () => {
	expect(likes(["poy", "sky"])).toEqual("poy and sky like this");
});

test("Should return the poy, sky and wp like this ", () => {
	expect(likes(["poy", "sky", "wp"])).toEqual("poy, sky and wp like this");
});

test("Should return the poy, sky and 4 others like this", () => {
	expect(likes(["poy", "sky", "wp", "qq", "ww", "ee"])).toEqual(
		"poy, sky and 4 others like this",
	);
});

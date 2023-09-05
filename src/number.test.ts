import { stringToNumber, sum } from "./function";

beforeEach(() => {
  console.log("before test");
});

afterEach(() => {
  console.log("after test");
});

test("1 + 1", () => {
  expect(sum(1, 2)).toBe(3);
});

test("2 + 3", () => {
  expect(sum(2, 3)).toBe(5);
});

it("string to number", () => {
  expect(stringToNumber("123")).toBe(123);
});

const {
    sumOfFirstNRec,
    factorialRec,
    fibonacciRec,
    greatestCommonDivisorRec,
    leastCommonMultipleRec
} = require("../src/numbers");

test("sumOfFirstNRec(0) should equal 0", () => {
    expect(sumOfFirstNRec(0)).toBe(0);
});

test("sumOfFirstNRec(3) should equal 6", () => {
    expect(sumOfFirstNRec(3)).toBe(6);
});

test("factorialRec(0) should equal 1", () => {
    expect(factorialRec(0)).toBe(1);
});

test("factorialRec(4) should equal 24", () => {
    expect(factorialRec(4)).toBe(24);
});

test("fibonacciRec(0) should equal 0", () => {
    expect(fibonacciRec(0)).toBe(0);
});

test("fibonacciRec(1) should equal 1", () => {
    expect(fibonacciRec(1)).toBe(1);
});

test("fibonacciRec(6) should equal 8", () => {
    expect(fibonacciRec(6)).toBe(8);
});

test("greatestCommonDivisorRec(12, 8) should equal 4", () => {
    expect(greatestCommonDivisorRec(12, 8)).toBe(4);
});

test("greatestCommonDivisorRec(7, 5) should equal 1", () => {
    expect(greatestCommonDivisorRec(7, 5)).toBe(1);
});

test("leastCommonMultipleRec(4, 6) should equal 12", () => {
    expect(leastCommonMultipleRec(4, 6)).toBe(12);
});

test("leastCommonMultipleRec(6, 8) should equal 24", () => {
    expect(leastCommonMultipleRec(6, 8)).toBe(24);
});

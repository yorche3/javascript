const {
    sumOfFirstNRec,
    factorialRec,
    fibonacciRec,
    greatestCommonDivisorRec,
    leastCommonMultipleRec
} = require("../src/numbers");

test("sumOfFirstNRec", () => {
    expect(sumOfFirstNRec(0)).toBe(0);
    expect(sumOfFirstNRec(3)).toBe(6);
});

test("factorialRec", () => {
    expect(factorialRec(0)).toBe(1);
    expect(factorialRec(4)).toBe(24);
});

test("fibonacciRec", () => {
    expect(fibonacciRec(0)).toBe(0);
    expect(fibonacciRec(1)).toBe(1);
    expect(fibonacciRec(6)).toBe(8);
});

test("greatestCommonDivisorRec", () => {
    expect(greatestCommonDivisorRec(12, 8)).toBe(4);
    expect(greatestCommonDivisorRec(7, 5)).toBe(1);
});

test("leastCommonMultipleRec", () => {
    expect(leastCommonMultipleRec(4, 6)).toBe(12);
    expect(leastCommonMultipleRec(6, 8)).toBe(24);
});

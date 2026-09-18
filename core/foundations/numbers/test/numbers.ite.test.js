const {
    sumOfFirstNIte,
    factorialIte,
    fibonacciIte,
    greatestCommonDivisorIte,
    leastCommonMultipleIte
} = require("../src/numbers");

test("sumOfFirstNIte", () => {
    expect(sumOfFirstNIte(0)).toBe(0);
    expect(sumOfFirstNIte(3)).toBe(6);
});

test("factorialIte", () => {
    expect(factorialIte(0)).toBe(1);
    expect(factorialIte(4)).toBe(24);
});

test("fibonacciIte", () => {
    expect(fibonacciIte(0)).toBe(0);
    expect(fibonacciIte(1)).toBe(1);
    expect(fibonacciIte(6)).toBe(8);
});

test("greatestCommonDivisorIte", () => {
    expect(greatestCommonDivisorIte(12, 8)).toBe(4);
    expect(greatestCommonDivisorIte(7, 5)).toBe(1);
});

test("leastCommonMultipleIte", () => {
    expect(leastCommonMultipleIte(4, 6)).toBe(12);
    expect(leastCommonMultipleIte(6, 8)).toBe(24);
});

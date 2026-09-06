const {
    sumOfFirstNIte,
    factorialIte,
    fibonacciIte,
    greatestCommonDivisorIte,
    leastCommonMultipleIte
} = require("../src/numbers");

test("sumOfFirstNIte(0) should equal 0", () => {
    expect(sumOfFirstNIte(0)).toBe(0);
});

test("sumOfFirstNIte(3) should equal 6", () => {
    expect(sumOfFirstNIte(3)).toBe(6);
});

test("factorialIte(0) should equal 1", () => {
    expect(factorialIte(0)).toBe(1);
});

test("factorialIte(4) should equal 24", () => {
    expect(factorialIte(4)).toBe(24);
});

test("fibonacciIte(0) should equal 0", () => {
    expect(fibonacciIte(0)).toBe(0);
});

test("fibonacciIte(1) should equal 1", () => {
    expect(fibonacciIte(1)).toBe(1);
});

test("fibonacciIte(6) should equal 8", () => {
    expect(fibonacciIte(6)).toBe(8);
});

test("greatestCommonDivisorIte(12, 8) should equal 4", () => {
    expect(greatestCommonDivisorIte(12, 8)).toBe(4);
});

test("greatestCommonDivisorIte(7, 5) should equal 1", () => {
    expect(greatestCommonDivisorIte(7, 5)).toBe(1);
});

test("leastCommonMultipleIte(4, 6) should equal 12", () => {
    expect(leastCommonMultipleIte(4, 6)).toBe(12);
});

test("leastCommonMultipleIte(6, 8) should equal 24", () => {
    expect(leastCommonMultipleIte(6, 8)).toBe(24);
});

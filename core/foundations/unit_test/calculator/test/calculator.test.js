const { addition, subtraction, multiplication, division, modulus } = require("../src/calculator");

test("addition(2, 3) should equal 5", () => {
    expect(addition(2, 3)).toBe(5);
});

test("subtraction(5, 2) should equal 3", () => {
    expect(subtraction(5, 2)).toBe(3);
});

test("multiplication(3, 4) should equal 12", () => {
    expect(multiplication(3, 4)).toBe(12);
});

test("division(10, 3) should equal 3", () => {
    expect(division(10, 3)).toBe(3);
});

test("modulus(10, 3) should equal 1", () => {
    expect(modulus(10, 3)).toBe(1);
});

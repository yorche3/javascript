const addition = (a, b) => a + b;

const subtraction = (a, b) => a - b;

// Repeated addition, no * operator
const multiplication = (a, b) => {
    let result = 0;
    for (let i = 0; i < b; i++) {
        result = addition(result, a);
    }
    return result;
};

// Repeated subtraction, no / operator
const division = (a, b) => {
    let count = 0;
    while (a >= b) {
        a = subtraction(a, b);
        count++;
    }
    return count;
};

// No % operator, built from division and multiplication
const modulus = (a, b) => {
    const q = division(a, b);
    const p = multiplication(q, b);
    return subtraction(a, p);
};

module.exports = { addition, subtraction, multiplication, division, modulus };

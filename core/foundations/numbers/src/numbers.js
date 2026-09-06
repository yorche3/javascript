// Direct recursion (_rec)

const sumOfFirstNRec = (n) => {
    if (n <= 0) {
        return 0;
    }
    return n + sumOfFirstNRec(n - 1);
};

const factorialRec = (n) => {
    if (n <= 0) {
        return 1;
    }
    return n * factorialRec(n - 1);
};

const fibonacciRec = (n) => {
    if (n <= 1) {
        return n;
    }
    return fibonacciRec(n - 1) + fibonacciRec(n - 2);
};

const greatestCommonDivisorRec = (a, b) => {
    if (b === 0) {
        return a;
    }
    return greatestCommonDivisorRec(b, a % b);
};

const leastCommonMultipleRec = (a, b) => {
    return (a * b) / greatestCommonDivisorRec(a, b);
};

// Accumulator recursion (_acc) — educational bridge, no TCO in Node.js

const sumOfFirstNAcc = (n) => sumOfFirstNAccHelp(n, 0);

const sumOfFirstNAccHelp = (n, acc) => {
    if (n <= 0) {
        return acc;
    }
    return sumOfFirstNAccHelp(n - 1, n + acc);
};

const factorialAcc = (n) => factorialAccHelp(n, 1);

const factorialAccHelp = (n, acc) => {
    if (n <= 1) {
        return acc;
    }
    return factorialAccHelp(n - 1, n * acc);
};

const fibonacciAcc = (n) => fibonacciAccHelp(n, 0, 1);

const fibonacciAccHelp = (n, acc2, acc1) => {
    if (n <= 0) {
        return acc2;
    }
    if (n <= 2) {
        return acc1 + acc2;
    }
    return fibonacciAccHelp(n - 1, acc1, acc1 + acc2);
};

const greatestCommonDivisorAcc = (a, b) => greatestCommonDivisorAccHelp(a, b);

const greatestCommonDivisorAccHelp = (a, b) => {
    if (b === 0) {
        return a;
    }
    return greatestCommonDivisorAccHelp(b, a % b);
};

const leastCommonMultipleAcc = (a, b) => {
    return (a * b) / greatestCommonDivisorAcc(a, b);
};

// Iterative (_ite)

const sumOfFirstNIte = (n) => {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
};

const factorialIte = (n) => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};

const fibonacciIte = (n) => {
    if (n <= 1) {
        return n;
    }
    let acc2 = 0;
    let acc1 = 1;
    for (let i = 2; i <= n; i++) {
        const temp = acc1 + acc2;
        acc2 = acc1;
        acc1 = temp;
    }
    return acc1;
};

const greatestCommonDivisorIte = (a, b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

const leastCommonMultipleIte = (a, b) => {
    return (a * b) / greatestCommonDivisorIte(a, b);
};

module.exports = {
    sumOfFirstNRec,
    factorialRec,
    fibonacciRec,
    greatestCommonDivisorRec,
    leastCommonMultipleRec,
    sumOfFirstNAcc,
    factorialAcc,
    fibonacciAcc,
    greatestCommonDivisorAcc,
    leastCommonMultipleAcc,
    sumOfFirstNIte,
    factorialIte,
    fibonacciIte,
    greatestCommonDivisorIte,
    leastCommonMultipleIte
};

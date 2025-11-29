/**
 * Math.abs – absolute value.
 */

const mathNumbers = [-7.8, -0.2, 0, 1.5, 9.9];

const logMathExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logMathExample("abs", "positive result", Math.abs(mathNumbers[0]));
    logMathExample("abs", "zero remains zero", Math.abs(0));
})();

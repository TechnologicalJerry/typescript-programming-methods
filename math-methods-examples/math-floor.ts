/**
 * Math.floor – largest integer <= number.
 */

const mathNumbers = [-7.8, -0.2, 0, 1.5, 9.9];

const logMathExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logMathExample("floor", "floor -0.2", Math.floor(mathNumbers[1]));
    logMathExample("floor", "floor 9.9", Math.floor(9.9));
})();

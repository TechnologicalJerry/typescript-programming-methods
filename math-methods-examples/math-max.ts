/**
 * Math.max – largest value in arguments.
 */

const mathNumbers = [-7.8, -0.2, 0, 1.5, 9.9];

const logMathExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logMathExample("max", "spread array", Math.max(...mathNumbers));
    logMathExample("max", "direct values", Math.max(10, -5, 22));
})();

/**
 * Math.min – smallest value.
 */

const mathNumbers = [-7.8, -0.2, 0, 1.5, 9.9];

const logMathExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logMathExample("min", "spread array", Math.min(...mathNumbers));
    logMathExample("min", "direct values", Math.min(10, -5, 22));
})();

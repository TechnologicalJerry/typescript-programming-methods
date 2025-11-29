/**
 * Math.exp – e raised to argument.
 */

const logMathExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logMathExample("exp", "e^1", Math.exp(1));
    logMathExample("exp", "e^3", Math.exp(3));
})();

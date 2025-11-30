/**
 * Math.sqrt – square root (same as Math.pow(x, 0.5)).
 */

const logMathExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logMathExample("sqrt", "sqrt 81", Math.sqrt(81));
    logMathExample("sqrt", "sqrt 2", Math.sqrt(2));
})();

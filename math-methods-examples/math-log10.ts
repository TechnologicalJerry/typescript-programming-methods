/**
 * Math.log10 – base-10 logarithm.
 */

const logMathExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logMathExample("log10", "log10 1000", Math.log10(1000));
    logMathExample("log10", "log10 5", Math.log10(5));
})();

/**
 * Math.log2 – base-2 logarithm.
 */

const logMathExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logMathExample("log2", "log2 8", Math.log2(8));
    logMathExample("log2", "log2 1", Math.log2(1));
})();

/**
 * Math.trunc – drop fractional part toward zero.
 */

const logMathExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logMathExample("trunc", "trunc 9.9", Math.trunc(9.9));
    logMathExample("trunc", "trunc -7.8", Math.trunc(-7.8));
})();

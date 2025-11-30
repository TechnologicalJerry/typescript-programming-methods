/**
 * Math.pow – exponentiation (base^exponent). Prefer ** operator in modern JS.
 */

const logMathExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logMathExample("pow", "3^4", Math.pow(3, 4));
    logMathExample("pow", "fractional exponents", Math.pow(16, 0.5));
})();

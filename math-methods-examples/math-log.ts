/**
 * Math.log – natural logarithm (base e).
 */

const logMathExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logMathExample("log", "ln 1", Math.log(1));
    logMathExample("log", "ln e^2", Math.log(Math.exp(2)));
})();

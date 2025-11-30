/**
 * Math.random – pseudo-random number [0, 1).
 */

const logMathExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logMathExample("random", "default range", Math.random());
    logMathExample("random", "integer 0-9", Math.floor(Math.random() * 10));
})();

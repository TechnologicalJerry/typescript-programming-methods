/**
 * Math.round – nearest integer (halves go up for positive numbers).
 */

const logMathExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logMathExample("round", "round 1.5", Math.round(1.5));
    logMathExample("round", "round -1.5", Math.round(-1.5));
})();

/**
 * Math.ceil – smallest integer >= number.
 */

const mathNumbers = [-7.8, -0.2, 0, 1.5, 9.9];

const logMathExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logMathExample("ceil", "ceil -7.8", Math.ceil(mathNumbers[0]));
    logMathExample("ceil", "ceil 1.5", Math.ceil(1.5));
})();

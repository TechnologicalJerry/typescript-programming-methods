/**
 * Math.sign – indicates sign (-1, 0, 1, -0).
 */

const negativeValue = -42.3;

const logMathExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logMathExample("sign", "negative value", Math.sign(negativeValue));
    logMathExample("sign", "positive value", Math.sign(15));
})();

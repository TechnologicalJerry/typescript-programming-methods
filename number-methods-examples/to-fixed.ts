/**
 * toFixed – formats number with fixed decimal places (string result).
 */

const floatValue = 1234.56789;

const logNumberExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logNumberExample("toFixed", "two decimals", floatValue.toFixed(2));
    logNumberExample("toFixed", "pad trailing zeros", (5).toFixed(3));
})();

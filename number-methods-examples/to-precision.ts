/**
 * toPrecision – formats to specified significant digits.
 */

const floatValue = 1234.56789;

const logNumberExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logNumberExample("toPrecision", "3 significant digits", floatValue.toPrecision(3));
    logNumberExample("toPrecision", "switch to exponential", (0.0001234).toPrecision(2));
})();

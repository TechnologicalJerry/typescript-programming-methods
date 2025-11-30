/**
 * Number.isInteger – strict integer check.
 */

const floatValue = 1234.56789;

const logNumberExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logNumberExample("isInteger", "whole number", Number.isInteger(42));
    logNumberExample("isInteger", "float is false", Number.isInteger(floatValue));
})();

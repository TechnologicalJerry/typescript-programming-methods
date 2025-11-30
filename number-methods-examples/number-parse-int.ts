/**
 * Number.parseInt – parses integers with optional radix.
 */

const logNumberExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logNumberExample("parseInt", "decimal default", Number.parseInt("101"));
    logNumberExample("parseInt", "binary radix", Number.parseInt("101", 2));
})();

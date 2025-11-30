/**
 * Number.isFinite – strict finite check (no coercion).
 */

const floatValue = 1234.56789;

const logNumberExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logNumberExample("isFinite", "finite float", Number.isFinite(floatValue));
    logNumberExample("isFinite", "Infinity check", Number.isFinite(Number.POSITIVE_INFINITY));
})();

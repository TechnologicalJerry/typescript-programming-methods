/**
 * Number.isNaN – true only for actual NaN (no coercion).
 */

const logNumberExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logNumberExample("isNaN", "NaN literal", Number.isNaN(Number("not-a-number")));
    logNumberExample("isNaN", "string not coerced", Number.isNaN("NaN"));
})();

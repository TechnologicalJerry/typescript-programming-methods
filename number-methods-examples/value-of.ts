/**
 * valueOf – primitive numeric value (handy with Number wrappers).
 */

const logNumberExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const wrapped = new Number(99);
    logNumberExample("valueOf", "unwrap Number object", wrapped.valueOf());
    logNumberExample("valueOf", "primitive unaffected", (10).valueOf());
})();

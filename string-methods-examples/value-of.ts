/**
 * valueOf – primitive string value of wrapper objects.
 */

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const wrapped = new String("wrapped text");
    logStringExample("valueOf", "primitive from wrapper", wrapped.valueOf());
    logStringExample("valueOf", "string literal unaffected", "inner".valueOf());
})();

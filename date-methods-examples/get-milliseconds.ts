/**
 * getMilliseconds – milliseconds (0-999).
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logDateExample("getMilliseconds", "base ms", baseDate.getMilliseconds());
    logDateExample("getMilliseconds", "now ms", new Date().getMilliseconds());
})();

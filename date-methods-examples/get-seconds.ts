/**
 * getSeconds – seconds (0-59).
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logDateExample("getSeconds", "base seconds", baseDate.getSeconds());
    logDateExample("getSeconds", "now seconds", new Date().getSeconds());
})();

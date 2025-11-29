/**
 * getMonth – zero-based month (0 Jan ... 11 Dec).
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logDateExample("getMonth", "base month index", baseDate.getMonth());
    logDateExample("getMonth", "current month index", new Date().getMonth());
})();

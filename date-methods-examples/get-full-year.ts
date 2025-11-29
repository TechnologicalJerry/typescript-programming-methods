/**
 * getFullYear – 4-digit year in local time.
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logDateExample("getFullYear", "base year", baseDate.getFullYear());
    logDateExample("getFullYear", "current year", new Date().getFullYear());
})();

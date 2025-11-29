/**
 * toISOString – ISO-8601 UTC string.
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logDateExample("toISOString", "base date", baseDate.toISOString());
    logDateExample("toISOString", "current date", new Date().toISOString());
})();

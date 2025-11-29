/**
 * getHours – hour in local time (0-23).
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logDateExample("getHours", "base hour", baseDate.getHours());
    logDateExample("getHours", "now hour", new Date().getHours());
})();

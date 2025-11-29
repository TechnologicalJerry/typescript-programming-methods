/**
 * getTime – numeric timestamp (same as valueOf()).
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logDateExample("getTime", "base timestamp", baseDate.getTime());
    logDateExample("getTime", "now timestamp", new Date().getTime());
})();

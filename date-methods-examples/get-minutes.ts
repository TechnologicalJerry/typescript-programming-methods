/**
 * getMinutes – minutes (0-59).
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logDateExample("getMinutes", "base minutes", baseDate.getMinutes());
    logDateExample("getMinutes", "now minutes", new Date().getMinutes());
})();

/**
 * getDate – day of month (1-31).
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logDateExample("getDate", "base day", baseDate.getDate());
    logDateExample("getDate", "today day", new Date().getDate());
})();

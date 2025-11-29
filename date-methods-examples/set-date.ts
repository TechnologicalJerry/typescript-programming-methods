/**
 * setDate – set day of month (auto adjusts month).
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const clone = new Date(baseDate);
    clone.setDate(1);
    logDateExample("setDate", "first day of month", clone.toISOString());
  
    clone.setDate(35);
    logDateExample("setDate", "overflow to next month", clone.toISOString());
})();

/**
 * setHours – set hour (optionally minute/second/ms).
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const clone = new Date(baseDate);
    clone.setHours(5);
    logDateExample("setHours", "set to 05:xx", clone.toISOString());
  
    clone.setHours(23, 59, 59, 999);
    logDateExample("setHours", "set to end of day", clone.toISOString());
})();

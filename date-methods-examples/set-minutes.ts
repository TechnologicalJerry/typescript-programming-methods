/**
 * setMinutes – set minutes (optionally seconds/ms).
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const clone = new Date(baseDate);
    clone.setMinutes(45);
    logDateExample("setMinutes", "45 minutes", clone.toISOString());
  
    clone.setMinutes(120, 30, 250);
    logDateExample("setMinutes", "overflow hours", clone.toISOString());
})();

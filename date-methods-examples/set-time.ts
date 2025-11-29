/**
 * setTime – set date from timestamp.
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const clone = new Date();
    clone.setTime(baseDate.getTime());
    logDateExample("setTime", "copy timestamp", clone.toISOString());
  
    clone.setTime(Date.now());
    logDateExample("setTime", "set to now", clone.toISOString());
})();

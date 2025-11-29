/**
 * setMonth – mutate month (optionally day).
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const clone = new Date(baseDate);
    clone.setMonth(0);
    logDateExample("setMonth", "set to January", clone.toISOString());
  
    clone.setMonth(11, 31);
    logDateExample("setMonth", "December 31st", clone.toISOString());
})();

/**
 * setSeconds – set seconds (optionally ms).
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const clone = new Date(baseDate);
    clone.setSeconds(5);
    logDateExample("setSeconds", "5 seconds", clone.toISOString());
  
    clone.setSeconds(75, 800);
    logDateExample("setSeconds", "overflow minutes", clone.toISOString());
})();

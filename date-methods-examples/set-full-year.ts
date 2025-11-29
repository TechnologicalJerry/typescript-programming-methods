/**
 * setFullYear – mutate year (optionally month/day).
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const clone = new Date(baseDate);
    clone.setFullYear(2030);
    logDateExample("setFullYear", "change only year", clone.toISOString());
  
    clone.setFullYear(2022, 5, 10);
    logDateExample("setFullYear", "change year+month+day", clone.toISOString());
})();

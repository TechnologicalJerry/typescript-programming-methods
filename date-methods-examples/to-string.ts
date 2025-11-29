/**
 * toString – localized human-readable string.
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logDateExample("toString", "base toString", baseDate.toString());
    logDateExample("toString", "now toString", new Date().toString());
})();

/**
 * toLocaleDateString – locale-specific date portion.
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logDateExample("toLocaleDateString", "US format", baseDate.toLocaleDateString("en-US"));
    logDateExample("toLocaleDateString", "India format", baseDate.toLocaleDateString("en-IN", { weekday: "long" }));
})();

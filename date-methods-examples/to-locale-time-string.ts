/**
 * toLocaleTimeString – locale-specific time portion.
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logDateExample("toLocaleTimeString", "24-hour", baseDate.toLocaleTimeString("en-GB"));
    logDateExample("toLocaleTimeString", "12-hour with options", baseDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }));
})();

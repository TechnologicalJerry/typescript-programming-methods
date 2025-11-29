/**
 * getDay – weekday index (0 Sunday ... 6 Saturday).
 */

const baseDate = new Date("2025-01-15T10:20:30.400Z");

const logDateExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logDateExample("getDay", "base weekday", baseDate.getDay());
    logDateExample("getDay", "today weekday", new Date().getDay());
})();

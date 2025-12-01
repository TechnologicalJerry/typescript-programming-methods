/**
 * padStart – pads string to length with filler at the start.
 */

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("padStart", "pad id to 5 chars", "42".padStart(5, "0"));
    logStringExample("padStart", "pad word with spaces", "TS".padStart(6));
})();

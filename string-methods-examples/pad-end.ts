/**
 * padEnd – pads at the end.
 */

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("padEnd", "pad with zeros", "42".padEnd(5, "0"));
    logStringExample("padEnd", "pad with words", "TS".padEnd(8, "-lang"));
})();

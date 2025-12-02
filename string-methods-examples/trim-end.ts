/**
 * trimEnd – removes trailing whitespace only.
 */

const headline = "TypeScript empowers typed JavaScript";

const padded = "   surrounded by spaces   ";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("trimEnd", "remove trailing", padded.trimEnd());
    logStringExample("trimEnd", "no change when no spaces", headline.trimEnd());
})();

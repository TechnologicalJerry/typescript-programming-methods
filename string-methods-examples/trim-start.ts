/**
 * trimStart – removes leading whitespace only.
 */

const headline = "TypeScript empowers typed JavaScript";

const padded = "   surrounded by spaces   ";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("trimStart", "remove leading", padded.trimStart());
    logStringExample("trimStart", "no change when no spaces", headline.trimStart());
})();

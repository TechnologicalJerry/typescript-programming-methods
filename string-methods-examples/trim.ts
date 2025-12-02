/**
 * trim – removes whitespace from both ends.
 */

const headline = "TypeScript empowers typed JavaScript";

const padded = "   surrounded by spaces   ";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("trim", "trimmed padded", padded.trim());
    logStringExample("trim", "trim already clean string", headline.trim());
})();

/**
 * slice – extracts substring using start/end indexes.
 */

const headline = "TypeScript empowers typed JavaScript";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("slice", "word TypeScript", headline.slice(0, 10));
    logStringExample("slice", "last 10 chars", headline.slice(-10));
})();

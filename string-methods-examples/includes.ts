/**
 * includes – case-sensitive substring presence check.
 */

const headline = "TypeScript empowers typed JavaScript";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("includes", "has typed", headline.includes("typed"));
    logStringExample("includes", "missing word", headline.includes("python"));
})();

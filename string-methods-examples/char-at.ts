/**
 * charAt – returns the character at a zero-based index.
 */

const headline = "TypeScript empowers typed JavaScript";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("charAt", "first character", headline.charAt(0));
    logStringExample("charAt", "character at position 10", headline.charAt(10));
})();

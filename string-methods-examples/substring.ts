/**
 * substring – similar to slice but swaps params if start>end and clamps negatives to 0.
 */

const headline = "TypeScript empowers typed JavaScript";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("substring", "characters 4-14", headline.substring(4, 14));
    logStringExample("substring", "swapped indexes 14-4", headline.substring(14, 4));
})();

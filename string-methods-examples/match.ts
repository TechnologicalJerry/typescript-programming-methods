/**
 * match – uses regex to return result array or null.
 */

const headline = "TypeScript empowers typed JavaScript";

const tagline = "Learning TS is fun and productive";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("match", "words starting with T", headline.match(/\bT\w+/g));
    logStringExample("match", "digits search", tagline.match(/\d+/));
})();

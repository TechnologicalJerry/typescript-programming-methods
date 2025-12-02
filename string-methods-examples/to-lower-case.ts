/**
 * toLowerCase – converts to lower case using locale-insensitive rules.
 */

const headline = "TypeScript empowers typed JavaScript";

const tagline = "Learning TS is fun and productive";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("toLowerCase", "headline lower", headline.toLowerCase());
    logStringExample("toLowerCase", "tagline lower", tagline.toLowerCase());
})();

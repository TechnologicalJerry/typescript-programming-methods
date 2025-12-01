/**
 * concat – joins strings without touching originals.
 */

const headline = "TypeScript empowers typed JavaScript";

const tagline = "Learning TS is fun and productive";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("concat", "headline + tagline", headline.concat(" — ", tagline));
    logStringExample("concat", "multiple segments", "".concat("TS ", "makes ", "types ", "work"));
})();

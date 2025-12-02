/**
 * toUpperCase – uppercase transformation.
 */

const headline = "TypeScript empowers typed JavaScript";

const tagline = "Learning TS is fun and productive";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("toUpperCase", "headline upper", headline.toUpperCase());
    logStringExample("toUpperCase", "tagline upper", tagline.toUpperCase());
})();

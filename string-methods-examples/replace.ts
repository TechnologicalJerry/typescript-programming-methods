/**
 * replace – swaps first match (string or regex).
 */

const tagline = "Learning TS is fun and productive";

const multiSentence = "regex ROCKS. Regex helps validate data.";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("replace", "replace JS with JavaScript", tagline.replace("TS", "TypeScript"));
    logStringExample("replace", "regex first match", multiSentence.replace(/regex/i, "Regex"));
})();

/**
 * search – regex search returning first match index.
 */

const headline = "TypeScript empowers typed JavaScript";

const multiSentence = "regex ROCKS. Regex helps validate data.";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("search", "first uppercase word", headline.search(/[A-Z][a-z]+/));
    logStringExample("search", "case-insensitive regex", multiSentence.search(/regex/i));
})();

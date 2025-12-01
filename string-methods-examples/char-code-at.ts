/**
 * charCodeAt – gives the UTF-16 code unit at an index.
 */

const headline = "TypeScript empowers typed JavaScript";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("charCodeAt", "code of T", headline.charCodeAt(0));
    logStringExample("charCodeAt", "code at index 5", headline.charCodeAt(5));
})();

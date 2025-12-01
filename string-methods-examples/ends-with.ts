/**
 * endsWith – tests suffix.
 */

const headline = "TypeScript empowers typed JavaScript";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("endsWith", "ends with JavaScript", headline.endsWith("JavaScript"));
    logStringExample("endsWith", "ends with empowers", headline.endsWith("empowers"));
})();

/**
 * startsWith – tests prefix.
 */

const headline = "TypeScript empowers typed JavaScript";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("startsWith", "starts with Type", headline.startsWith("Type"));
    logStringExample("startsWith", "starts with script case-sensitive", headline.startsWith("script"));
})();

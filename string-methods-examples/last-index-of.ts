/**
 * lastIndexOf – last occurrence index or -1.
 */

const csvLine = "Ada,Grace,Linus,Ada";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("lastIndexOf", "last Ada", csvLine.lastIndexOf("Ada"));
    logStringExample("lastIndexOf", "search before index 10", csvLine.lastIndexOf("Ada", 10));
})();

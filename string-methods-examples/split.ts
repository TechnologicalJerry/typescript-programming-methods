/**
 * split – breaks string into array.
 */

const headline = "TypeScript empowers typed JavaScript";

const csvLine = "Ada,Grace,Linus,Ada";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("split", "CSV to array", csvLine.split(","));
    logStringExample("split", "limit to 2 parts", headline.split(" ", 2));
})();

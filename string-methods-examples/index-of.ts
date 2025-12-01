/**
 * indexOf – first occurrence index or -1.
 */

const csvLine = "Ada,Grace,Linus,Ada";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("indexOf", "first Ada", csvLine.indexOf("Ada"));
    logStringExample("indexOf", "search from position 5", csvLine.indexOf("Ada", 5));
})();

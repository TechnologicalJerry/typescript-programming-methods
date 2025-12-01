/**
 * repeat – repeats string n times.
 */

const headline = "TypeScript empowers typed JavaScript";

const logStringExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logStringExample("repeat", "repeat 3 times", "TS ".repeat(3));
    logStringExample("repeat", "repeat headline twice", headline.repeat(2));
})();

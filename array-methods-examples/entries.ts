/**
 * entries – iterator of [index, value] pairs.
 */

const sampleNumbers = [1, 2, 3, 4, 5];

const sampleWords = ["alpha", "beta", "gamma", "delta"];

const logExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const entryPairs = Array.from(sampleWords.entries());
    logExample("entries", "indexed words", entryPairs);
  
    const numberEntries = Array.from(sampleNumbers.entries());
    logExample("entries", "indexed numbers", numberEntries);
})();

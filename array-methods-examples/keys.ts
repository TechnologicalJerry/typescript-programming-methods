/**
 * keys – iterator of indexes.
 */

const sampleNumbers = [1, 2, 3, 4, 5];

const sampleWords = ["alpha", "beta", "gamma", "delta"];

const logExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const keysList = Array.from(sampleWords.keys());
    logExample("keys", "word indexes", keysList);
  
    const numberKeys = Array.from(sampleNumbers.keys());
    logExample("keys", "number indexes", numberKeys);
})();

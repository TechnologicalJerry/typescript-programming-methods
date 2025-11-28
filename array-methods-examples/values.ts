/**
 * values – iterator of values (similar to for...of).
 */

const sampleNumbers = [1, 2, 3, 4, 5];

const sampleWords = ["alpha", "beta", "gamma", "delta"];

const logExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const valuesList = Array.from(sampleWords.values());
    logExample("values", "word values", valuesList);
  
    const numberValues = Array.from(sampleNumbers.values());
    logExample("values", "number values", numberValues);
})();

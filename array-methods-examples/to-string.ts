/**
 * toString – returns comma-separated string representation.
 */

const sampleNumbers = [1, 2, 3, 4, 5];

const sampleWords = ["alpha", "beta", "gamma", "delta"];

const logExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logExample("toString", "numbers as string", sampleNumbers.toString());
    logExample("toString", "words as string", sampleWords.toString());
})();

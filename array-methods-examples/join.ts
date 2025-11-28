/**
 * join – concatenates array elements into a string.
 */

const sampleNumbers = [1, 2, 3, 4, 5];

const sampleWords = ["alpha", "beta", "gamma", "delta"];

const logExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logExample("join", "comma-separated words", sampleWords.join(", "));
    logExample("join", "custom separator", sampleNumbers.join(" -> "));
})();

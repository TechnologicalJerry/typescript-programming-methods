/**
 * slice – non-mutating extraction of a sub-array [start, end).
 */

const sampleNumbers = [1, 2, 3, 4, 5];

const sampleWords = ["alpha", "beta", "gamma", "delta"];

const logExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logExample("slice", "middle numbers", sampleNumbers.slice(1, 4));
    logExample("slice", "copy tail", sampleWords.slice(-2));
})();

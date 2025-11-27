/**
 * includes – boolean check for value presence (uses SameValueZero equality).
 */

const sampleNumbers = [1, 2, 3, 4, 5];

const sampleWords = ["alpha", "beta", "gamma", "delta"];

const logExample = (method, scenario, result) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logExample("includes", "words has beta", sampleWords.includes("beta"));
    logExample("includes", "numbers has 3 starting at index 3", sampleNumbers.includes(3, 3));
})();

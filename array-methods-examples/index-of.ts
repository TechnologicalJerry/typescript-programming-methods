/**
 * indexOf – returns first index of value or -1.
 */

const sampleNumbers = [1, 2, 3, 4, 5];

const sampleWords = ["alpha", "beta", "gamma", "delta"];

const logExample = (method, scenario, result) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logExample("indexOf", "index of gamma", sampleWords.indexOf("gamma"));
    logExample("indexOf", "missing value", sampleNumbers.indexOf(99));
})();

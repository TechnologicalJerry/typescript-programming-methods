/**
 * concat – merges arrays/values into a new array.
 */

const sampleNumbers = [1, 2, 3, 4, 5];

const sampleWords = ["alpha", "beta", "gamma", "delta"];

const logExample = (method, scenario, result) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
logExample("concat", "extend numbers", sampleNumbers.concat([6, 7]));
  logExample("concat", "mix primitives", ["start"].concat(sampleWords, "end"));
})();

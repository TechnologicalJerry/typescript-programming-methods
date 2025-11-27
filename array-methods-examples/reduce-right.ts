/**
 * reduceRight – like reduce but from right-to-left.
 */

const sampleNumbers = [1, 2, 3, 4, 5];

const logExample = (method, scenario, result) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logExample(
      "reduceRight",
      "join chars from right",
      ["A", "B", "C"].reduceRight((acc, curr) => acc + curr, "")
    );
    logExample(
      "reduceRight",
      "right-to-left subtraction",
      sampleNumbers.reduceRight((acc, curr) => curr - acc)
    );
})();

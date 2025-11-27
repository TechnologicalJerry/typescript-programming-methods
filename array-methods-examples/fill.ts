/**
 * fill – overwrites part/all of array with a static value.
 */

const sampleNumbers = [1, 2, 3, 4, 5];

const logExample = (method, scenario, result) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const filled = new Array(4).fill("pending");
    logExample("fill", "new filled array", filled);
  
    const partiallyFilled = [...sampleNumbers].fill(0, 1, 4);
    logExample("fill", "partial overwrite", partiallyFilled);
})();

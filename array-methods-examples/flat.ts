/**
 * flat – flattens nested arrays up to depth (default 1).
 */

const nestedNumbers = [[1, 2], [3, 4], [5, 6]];

const deepNestedNumbers = [1, [2, [3, [4]]]];

const logExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logExample("flat", "single depth flatten", nestedNumbers.flat());
    logExample("flat", "deep flatten 3 levels", deepNestedNumbers.flat(3));
})();

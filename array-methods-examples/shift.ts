/**
 * shift – removes first element and returns it.
 */

const sampleWords = ["alpha", "beta", "gamma", "delta"];

const logExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const mutable = [...sampleWords];
    const first = mutable.shift();
    logExample("shift", "removed element", first);
    logExample("shift", "array after shift", mutable);
  
    mutable.shift();
    logExample("shift", "after second shift", mutable);
})();

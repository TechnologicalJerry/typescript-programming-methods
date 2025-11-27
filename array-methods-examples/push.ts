/**
 * push – appends to the end (returns new length).
 */

const sampleWords = ["alpha", "beta", "gamma", "delta"];

const logExample = (method, scenario, result) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const mutable = [...sampleWords];
    const newLength = mutable.push("epsilon");
    logExample("push", "length after push", newLength);
    logExample("push", "array after push", mutable);
  
    mutable.push("zeta", "eta");
    logExample("push", "after pushing multiple", mutable);
})();

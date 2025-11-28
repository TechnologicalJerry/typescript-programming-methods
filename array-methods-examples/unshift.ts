/**
 * unshift – adds elements to start; returns new length.
 */

const sampleNumbers = [1, 2, 3, 4, 5];

const logExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const mutable = [...sampleNumbers];
    const len = mutable.unshift(-2, -1, 0);
    logExample("unshift", "new length", len);
    logExample("unshift", "array after unshift", mutable);
  
    mutable.unshift(-3);
    logExample("unshift", "after second unshift", mutable);
})();

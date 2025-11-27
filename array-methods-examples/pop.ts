/**
 * pop – removes and returns the last element.
 */

const sampleNumbers = [1, 2, 3, 4, 5];

const logExample = (method, scenario, result) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const mutable = [...sampleNumbers];
    const last = mutable.pop();
    logExample("pop", "removed element", last);
    logExample("pop", "array after pop", mutable);
  
    mutable.pop();
    logExample("pop", "after second pop", mutable);
})();

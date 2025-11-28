/**
 * splice – mutates array by removing/inserting elements.
 */

const sampleNumbers = [1, 2, 3, 4, 5];

const sampleWords = ["alpha", "beta", "gamma", "delta"];

const logExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const mutable = [...sampleWords];
    const removed = mutable.splice(1, 2, "omega");
    logExample("splice", "removed elements", removed);
    logExample("splice", "array after replace", mutable);
  
    const insertedOnly = [...sampleNumbers];
    insertedOnly.splice(2, 0, 99, 100);
    logExample("splice", "insert without removal", insertedOnly);
})();

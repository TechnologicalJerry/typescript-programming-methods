/**
 * Object.defineProperties – batch defineProperty helper.
 */

const logObjectExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const account: Record<string, unknown> = {};
    Object.defineProperties(account, {
      id: { value: 123, enumerable: true },
      active: { value: true, writable: true, enumerable: true },
    });
    logObjectExample("defineProperties", "account object", account);
  
    const vector: Record<string, number> = {};
    Object.defineProperties(vector, {
      x: { value: 3, writable: true },
      y: { value: 4, writable: true },
    });
    logObjectExample("defineProperties", "vector magnitude", Math.hypot(vector.x, vector.y));
})();

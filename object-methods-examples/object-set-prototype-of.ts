/**
 * Object.setPrototypeOf – sets object's prototype (use sparingly).
 */

const logObjectExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const base = { greet() { return "hi"; } };
    const obj = { name: "Hybrid" };
    Object.setPrototypeOf(obj, base);
    logObjectExample("setPrototypeOf", "prototype greeting", (obj as typeof obj & { greet: () => string }).greet());
  
    const another = {};
    Object.setPrototypeOf(another, Array.prototype);
    logObjectExample("setPrototypeOf", "array methods available", typeof (another as unknown as []).push);
})();

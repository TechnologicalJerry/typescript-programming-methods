/**
 * Object.freeze – prevents adding/removing/updating properties (shallow).
 */

const logObjectExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const frozen = Object.freeze({ language: "TypeScript", version: 5 });
    // Attempted mutation silently fails (or throws in strict mode).
    // @ts-expect-error
    frozen.version = 6;
    logObjectExample("freeze", "after mutation attempt", frozen);
  
    const frozenArray = Object.freeze(["immutable", "array"]);
    logObjectExample("freeze", "frozen array", frozenArray);
})();

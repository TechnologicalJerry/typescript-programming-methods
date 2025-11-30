/**
 * Object.fromEntries – builds object from iterable of key/value pairs.
 */

const logObjectExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const entries = [
      ["language", "TypeScript"],
      ["version", "5.5"],
    ];
    logObjectExample("fromEntries", "object from pairs", Object.fromEntries(entries));
  
    const params = new URLSearchParams("page=1&limit=20");
    logObjectExample("fromEntries", "query params to object", Object.fromEntries(params.entries()));
})();

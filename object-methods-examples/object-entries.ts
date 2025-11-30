/**
 * Object.entries – turns object into [key, value] tuples.
 */

/**
 * Helper type declarations reused across object examples.
 */
type User = {
  id: number;
  name: string;
  role?: string;
  active?: boolean;
};

const templateUser = { id: 1, name: "Ada", role: "architect", active: true };

const logObjectExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logObjectExample("entries", "user entries", Object.entries(templateUser));
    logObjectExample("entries", "build Map", new Map(Object.entries({ a: 1, b: 2 })));
})();

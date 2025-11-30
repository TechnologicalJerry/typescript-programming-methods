/**
 * Object.keys – returns enumerable own property names.
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
  logObjectExample("keys", "templateUser keys", Object.keys(templateUser));
    logObjectExample("keys", "array indices as strings", Object.keys(["a", "b", "c"]));
})();

/**
 * Object.values – returns enumerable own property values.
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
  logObjectExample("values", "user values", Object.values(templateUser));
    logObjectExample("values", "map over object", Object.values({ a: 1, b: 2 }).map((n) => n * 10));
})();

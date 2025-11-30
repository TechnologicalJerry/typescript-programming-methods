/**
 * Object.hasOwn – checks for own property (replacement for hasOwnProperty).
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
  logObjectExample("hasOwn", "user has name", Object.hasOwn(templateUser, "name"));
    logObjectExample("hasOwn", "user lacks salary", Object.hasOwn(templateUser, "salary"));
})();

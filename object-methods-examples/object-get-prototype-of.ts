/**
 * Object.getPrototypeOf – returns object's prototype.
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
  const proto = Object.getPrototypeOf(templateUser);
    logObjectExample("getPrototypeOf", "user prototype", proto);
  
    const derived = Object.create({ base: true });
    logObjectExample("getPrototypeOf", "custom prototype", Object.getPrototypeOf(derived));
})();

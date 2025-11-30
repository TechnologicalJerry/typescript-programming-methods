/**
 * Object.assign – copies enumerable properties into a target (shallow).
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

const overrides = { role: "mentor", location: "London" };

const logObjectExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const merged = Object.assign({}, templateUser, overrides);
    logObjectExample("assign", "merged user", merged);
  
    const target = { id: 99 };
    Object.assign(target, { name: "Grace" }, { active: false });
    logObjectExample("assign", "target mutated", target);
})();

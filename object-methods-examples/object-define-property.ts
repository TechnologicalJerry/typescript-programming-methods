/**
 * Object.defineProperty – adds/updates property with fine-grained descriptors.
 */

const logObjectExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const project = { name: "TS Handbook" };
    Object.defineProperty(project, "immutableId", {
      value: "TS-001",
      writable: false,
      enumerable: true,
    });
    logObjectExample("defineProperty", "project with readonly id", project);
  
    const metrics: Record<string, number> = {};
    Object.defineProperty(metrics, "visits", {
      get() {
        return this._visits ?? 0;
      },
      set(value: number) {
        this._visits = value;
      },
      enumerable: true,
    });
    metrics.visits = 10;
    logObjectExample("defineProperty", "getter/setter property", metrics.visits);
})();

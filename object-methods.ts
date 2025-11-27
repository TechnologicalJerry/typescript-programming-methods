/**
 * Object utility methods with explanations plus multiple examples.
 */

type User = {
  id: number;
  name: string;
  role?: string;
  active?: boolean;
};

const templateUser: User = { id: 1, name: "Ada", role: "architect", active: true };
const overrides = { role: "mentor", location: "London" };

const logObjectExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

// Object.assign: copies enumerable properties into a target (shallow).
(() => {
  const merged = Object.assign({}, templateUser, overrides);
  logObjectExample("assign", "merged user", merged);

  const target = { id: 99 };
  Object.assign(target, { name: "Grace" }, { active: false });
  logObjectExample("assign", "target mutated", target);
})();

// Object.keys: returns enumerable own property names.
(() => {
  logObjectExample("keys", "templateUser keys", Object.keys(templateUser));
  logObjectExample("keys", "array indices as strings", Object.keys(["a", "b", "c"]));
})();

// Object.values: returns enumerable own property values.
(() => {
  logObjectExample("values", "user values", Object.values(templateUser));
  logObjectExample("values", "map over object", Object.values({ a: 1, b: 2 }).map((n) => n * 10));
})();

// Object.entries: turns object into [key, value] tuples.
(() => {
  logObjectExample("entries", "user entries", Object.entries(templateUser));
  logObjectExample("entries", "build Map", new Map(Object.entries({ a: 1, b: 2 })));
})();

// Object.freeze: prevents adding/removing/updating properties (shallow).
(() => {
  const frozen = Object.freeze({ language: "TypeScript", version: 5 });
  // Attempted mutation silently fails (or throws in strict mode).
  // @ts-expect-error
  frozen.version = 6;
  logObjectExample("freeze", "after mutation attempt", frozen);

  const frozenArray = Object.freeze(["immutable", "array"]);
  logObjectExample("freeze", "frozen array", frozenArray);
})();

// Object.seal: disallows adding/removing props but allows updates.
(() => {
  const sealed = Object.seal({ status: "draft", published: false });
  sealed.status = "review";
  // @ts-expect-error
  sealed.newProp = true;
  logObjectExample("seal", "updated sealed object", sealed);

  const sealedUser = Object.seal({ ...templateUser });
  delete sealedUser.role;
  logObjectExample("seal", "delete ignored", sealedUser);
})();

// Object.create: creates object with specified prototype.
(() => {
  const personProto = {
    greet() {
      return `Hello, ${this.name}`;
    },
  };
  const ada = Object.create(personProto);
  ada.name = "Ada";
  logObjectExample("create", "proto method call", ada.greet());

  const admin = Object.create(personProto, {
    name: { value: "Grace", enumerable: true },
    role: { value: "admin", enumerable: true, writable: true },
  });
  logObjectExample("create", "descriptor-defined object", admin);
})();

// Object.defineProperty: adds/updates property with fine-grained descriptors.
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

// Object.defineProperties: batch defineProperty helper.
(() => {
  const account: Record<string, unknown> = {};
  Object.defineProperties(account, {
    id: { value: 123, enumerable: true },
    active: { value: true, writable: true, enumerable: true },
  });
  logObjectExample("defineProperties", "account object", account);

  const vector: Record<string, number> = {};
  Object.defineProperties(vector, {
    x: { value: 3, writable: true },
    y: { value: 4, writable: true },
  });
  logObjectExample("defineProperties", "vector magnitude", Math.hypot(vector.x, vector.y));
})();

// Object.getPrototypeOf: returns object's prototype.
(() => {
  const proto = Object.getPrototypeOf(templateUser);
  logObjectExample("getPrototypeOf", "user prototype", proto);

  const derived = Object.create({ base: true });
  logObjectExample("getPrototypeOf", "custom prototype", Object.getPrototypeOf(derived));
})();

// Object.setPrototypeOf: sets object's prototype (use sparingly).
(() => {
  const base = { greet() { return "hi"; } };
  const obj = { name: "Hybrid" };
  Object.setPrototypeOf(obj, base);
  logObjectExample("setPrototypeOf", "prototype greeting", (obj as typeof obj & { greet: () => string }).greet());

  const another = {};
  Object.setPrototypeOf(another, Array.prototype);
  logObjectExample("setPrototypeOf", "array methods available", typeof (another as unknown as []).push);
})();

// Object.hasOwn: checks for own property (replacement for hasOwnProperty).
(() => {
  logObjectExample("hasOwn", "user has name", Object.hasOwn(templateUser, "name"));
  logObjectExample("hasOwn", "user lacks salary", Object.hasOwn(templateUser, "salary"));
})();

// Object.fromEntries: builds object from iterable of key/value pairs.
(() => {
  const entries = [
    ["language", "TypeScript"],
    ["version", "5.5"],
  ];
  logObjectExample("fromEntries", "object from pairs", Object.fromEntries(entries));

  const params = new URLSearchParams("page=1&limit=20");
  logObjectExample("fromEntries", "query params to object", Object.fromEntries(params.entries()));
})();


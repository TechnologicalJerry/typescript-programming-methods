/**
 * JSON helpers: parse and stringify with nuanced examples.
 */

const userJson = '{"id":1,"name":"Ada","skills":["TS","Node"],"active":true}';
const complexObject = {
  id: 2,
  createdAt: new Date("2025-05-01T12:00:00Z"),
  score: 98.5,
  tags: ["reference", "example"],
};

const logJsonExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

// JSON.parse: turns JSON string into JS value; reviver customizes conversion.
(() => {
  const plain = JSON.parse(userJson);
  logJsonExample("parse", "basic parse", plain);

  const withReviver = JSON.parse(userJson, (key, value) => (key === "name" ? value.toUpperCase() : value));
  logJsonExample("parse", "reviver uppercases name", withReviver);
})();

// JSON.stringify: serializes JS value to JSON; replacer filters and space indents.
(() => {
  const serialized = JSON.stringify(complexObject);
  logJsonExample("stringify", "basic stringify", serialized);

  const replacer = (key: string, value: unknown) => (value instanceof Date ? value.toISOString() : value);
  const formatted = JSON.stringify(complexObject, replacer, 2);
  logJsonExample("stringify", "with replacer + pretty print", formatted);
})();


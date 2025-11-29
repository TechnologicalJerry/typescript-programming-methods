/**
 * JSON.stringify – serializes JS value to JSON; replacer filters and space indents.
 */

const complexObject = {
  id: 2,
  createdAt: new Date("2025-05-01T12:00:00Z"),
  score: 98.5,
  tags: ["reference", "example"],
};

const logJsonExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  const serialized = JSON.stringify(complexObject);
    logJsonExample("stringify", "basic stringify", serialized);
  
    const replacer = (key: string, value: unknown) => (value instanceof Date ? value.toISOString() : value);
    const formatted = JSON.stringify(complexObject, replacer, 2);
    logJsonExample("stringify", "with replacer + pretty print", formatted);
})();

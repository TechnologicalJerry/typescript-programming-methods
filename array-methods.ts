/**
 * Array methods reference:
 * Each block explains the method purpose and runs 2-3 concise examples.
 * Shared datasets keep the focus on how each API works rather than setup noise.
 */

const sampleNumbers = [1, 2, 3, 4, 5];
const sampleWords = ["alpha", "beta", "gamma", "delta"];
const nestedNumbers = [[1, 2], [3, 4], [5, 6]];
const deepNestedNumbers = [1, [2, [3, [4]]]];
const samplePeople = [
  { id: 1, name: "Ada", active: true, scores: [95, 88] },
  { id: 2, name: "Grace", active: false, scores: [70, 82] },
  { id: 3, name: "Linus", active: true, scores: [91, 96] },
];

const logExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

// map: transforms every element and returns a brand-new array.
(() => {
  logExample("map", "double numbers", sampleNumbers.map((n) => n * 2));
  logExample("map", "pluck names", samplePeople.map((person) => person.name));
})();

// filter: keeps elements that satisfy a predicate without mutating the source.
(() => {
  logExample("filter", "keep even numbers", sampleNumbers.filter((n) => n % 2 === 0));
  logExample("filter", "only active people", samplePeople.filter((person) => person.active));
})();

// reduce: accumulates values into a single result.
(() => {
  logExample("reduce", "sum numbers", sampleNumbers.reduce((acc, curr) => acc + curr, 0));
  logExample(
    "reduce",
    "group names into object",
    samplePeople.reduce((acc, person) => ({ ...acc, [person.id]: person.name }), {})
  );
})();

// forEach: performs side effects on each element (no return value).
(() => {
  const collected: number[] = [];
  sampleNumbers.forEach((n) => collected.push(n * n));
  logExample("forEach", "capture squares", collected);

  const names: string[] = [];
  samplePeople.forEach((person, index) => names.push(`${index}:${person.name}`));
  logExample("forEach", "prefix with index", names);
})();

// find: returns the first element that matches a predicate or undefined.
(() => {
  logExample("find", "first number > 3", sampleNumbers.find((n) => n > 3));
  logExample("find", "first inactive person", samplePeople.find((person) => !person.active));
})();

// findIndex: same as find but returns the index instead of the element.
(() => {
  logExample("findIndex", "index of number 4", sampleNumbers.findIndex((n) => n === 4));
  logExample("findIndex", "first high scorer index", samplePeople.findIndex((person) => person.scores[0] > 90));
})();

// sort: orders elements in place; clone first to keep data immutable.
(() => {
  const ascending = [...sampleNumbers].sort((a, b) => a - b);
  logExample("sort", "numbers ascending", ascending);

  const byName = [...samplePeople].sort((a, b) => a.name.localeCompare(b.name));
  logExample(
    "sort",
    "people by name",
    byName.map((person) => person.name)
  );
})();

// reverse: flips array order in place.
(() => {
  const reversedNumbers = [...sampleNumbers].reverse();
  logExample("reverse", "numbers reversed", reversedNumbers);

  const reversedWords = [...sampleWords].reverse();
  logExample("reverse", "words reversed", reversedWords);
})();

// slice: non-mutating extraction of a sub-array [start, end).
(() => {
  logExample("slice", "middle numbers", sampleNumbers.slice(1, 4));
  logExample("slice", "copy tail", sampleWords.slice(-2));
})();

// splice: mutates array by removing/inserting elements.
(() => {
  const mutable = [...sampleWords];
  const removed = mutable.splice(1, 2, "omega");
  logExample("splice", "removed elements", removed);
  logExample("splice", "array after replace", mutable);

  const insertedOnly = [...sampleNumbers];
  insertedOnly.splice(2, 0, 99, 100);
  logExample("splice", "insert without removal", insertedOnly);
})();

// concat: merges arrays/values into a new array.
(() => {
  logExample("concat", "extend numbers", sampleNumbers.concat([6, 7]));
  logExample("concat", "mix primitives", ["start"].concat(sampleWords, "end"));
})();

// includes: boolean check for value presence (uses SameValueZero equality).
(() => {
  logExample("includes", "words has beta", sampleWords.includes("beta"));
  logExample("includes", "numbers has 3 starting at index 3", sampleNumbers.includes(3, 3));
})();

// indexOf: returns first index of value or -1.
(() => {
  logExample("indexOf", "index of gamma", sampleWords.indexOf("gamma"));
  logExample("indexOf", "missing value", sampleNumbers.indexOf(99));
})();

// every: true if all elements satisfy predicate.
(() => {
  logExample("every", "all numbers positive", sampleNumbers.every((n) => n > 0));
  logExample("every", "all people have 2 scores", samplePeople.every((person) => person.scores.length === 2));
})();

// some: true if at least one element satisfies predicate.
(() => {
  logExample("some", "any number > 4", sampleNumbers.some((n) => n > 4));
  logExample("some", "any inactive person", samplePeople.some((person) => !person.active));
})();

// join: concatenates array elements into a string.
(() => {
  logExample("join", "comma-separated words", sampleWords.join(", "));
  logExample("join", "custom separator", sampleNumbers.join(" -> "));
})();

// push: appends to the end (returns new length).
(() => {
  const mutable = [...sampleWords];
  const newLength = mutable.push("epsilon");
  logExample("push", "length after push", newLength);
  logExample("push", "array after push", mutable);

  mutable.push("zeta", "eta");
  logExample("push", "after pushing multiple", mutable);
})();

// pop: removes and returns the last element.
(() => {
  const mutable = [...sampleNumbers];
  const last = mutable.pop();
  logExample("pop", "removed element", last);
  logExample("pop", "array after pop", mutable);

  mutable.pop();
  logExample("pop", "after second pop", mutable);
})();

// shift: removes first element and returns it.
(() => {
  const mutable = [...sampleWords];
  const first = mutable.shift();
  logExample("shift", "removed element", first);
  logExample("shift", "array after shift", mutable);

  mutable.shift();
  logExample("shift", "after second shift", mutable);
})();

// unshift: adds elements to start; returns new length.
(() => {
  const mutable = [...sampleNumbers];
  const len = mutable.unshift(-2, -1, 0);
  logExample("unshift", "new length", len);
  logExample("unshift", "array after unshift", mutable);

  mutable.unshift(-3);
  logExample("unshift", "after second unshift", mutable);
})();

// flat: flattens nested arrays up to depth (default 1).
(() => {
  logExample("flat", "single depth flatten", nestedNumbers.flat());
  logExample("flat", "deep flatten 3 levels", deepNestedNumbers.flat(3));
})();

// flatMap: map + flat (depth 1) in one pass.
(() => {
  logExample(
    "flatMap",
    "expand scores",
    samplePeople.flatMap((person) => person.scores)
  );
  logExample(
    "flatMap",
    "split words into chars",
    sampleWords.flatMap((word) => word.split("").slice(0, 2))
  );
})();

// fill: overwrites part/all of array with a static value.
(() => {
  const filled = new Array(4).fill("pending");
  logExample("fill", "new filled array", filled);

  const partiallyFilled = [...sampleNumbers].fill(0, 1, 4);
  logExample("fill", "partial overwrite", partiallyFilled);
})();

// entries: iterator of [index, value] pairs.
(() => {
  const entryPairs = Array.from(sampleWords.entries());
  logExample("entries", "indexed words", entryPairs);

  const numberEntries = Array.from(sampleNumbers.entries());
  logExample("entries", "indexed numbers", numberEntries);
})();

// keys: iterator of indexes.
(() => {
  const keysList = Array.from(sampleWords.keys());
  logExample("keys", "word indexes", keysList);

  const numberKeys = Array.from(sampleNumbers.keys());
  logExample("keys", "number indexes", numberKeys);
})();

// values: iterator of values (similar to for...of).
(() => {
  const valuesList = Array.from(sampleWords.values());
  logExample("values", "word values", valuesList);

  const numberValues = Array.from(sampleNumbers.values());
  logExample("values", "number values", numberValues);
})();

// toString: returns comma-separated string representation.
(() => {
  logExample("toString", "numbers as string", sampleNumbers.toString());
  logExample("toString", "words as string", sampleWords.toString());
})();

// reduceRight: like reduce but from right-to-left.
(() => {
  logExample(
    "reduceRight",
    "join chars from right",
    ["A", "B", "C"].reduceRight((acc, curr) => acc + curr, "")
  );
  logExample(
    "reduceRight",
    "right-to-left subtraction",
    sampleNumbers.reduceRight((acc, curr) => curr - acc)
  );
})();

// copyWithin: copies part of array within itself.
(() => {
  const copyOne = [1, 2, 3, 4, 5];
  copyOne.copyWithin(0, 3);
  logExample("copyWithin", "copy last two to start", copyOne);

  const copyTwo = ["a", "b", "c", "d", "e"];
  copyTwo.copyWithin(2, 0, 2);
  logExample("copyWithin", "copy first two into middle", copyTwo);
})();


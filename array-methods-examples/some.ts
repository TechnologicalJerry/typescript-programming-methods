/**
 * some – true if at least one element satisfies predicate.
 */

const sampleNumbers = [1, 2, 3, 4, 5];

const samplePeople = [
  { id: 1, name: "Ada", active: true, scores: [95, 88] },
  { id: 2, name: "Grace", active: false, scores: [70, 82] },
  { id: 3, name: "Linus", active: true, scores: [91, 96] },
];

const logExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logExample("some", "any number > 4", sampleNumbers.some((n) => n > 4));
    logExample("some", "any inactive person", samplePeople.some((person) => !person.active));
})();

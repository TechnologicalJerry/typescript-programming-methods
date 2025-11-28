/**
 * find – returns the first element that matches a predicate or undefined.
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
  logExample("find", "first number > 3", sampleNumbers.find((n) => n > 3));
    logExample("find", "first inactive person", samplePeople.find((person) => !person.active));
})();

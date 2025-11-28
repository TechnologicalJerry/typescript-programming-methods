/**
 * findIndex – same as find but returns the index instead of the element.
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
  logExample("findIndex", "index of number 4", sampleNumbers.findIndex((n) => n === 4));
    logExample("findIndex", "first high scorer index", samplePeople.findIndex((person) => person.scores[0] > 90));
})();

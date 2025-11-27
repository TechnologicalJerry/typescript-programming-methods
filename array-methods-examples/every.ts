/**
 * every – true if all elements satisfy predicate.
 */

const sampleNumbers = [1, 2, 3, 4, 5];

const samplePeople = [
  { id: 1, name: "Ada", active: true, scores: [95, 88] },
  { id: 2, name: "Grace", active: false, scores: [70, 82] },
  { id: 3, name: "Linus", active: true, scores: [91, 96] },
];

const logExample = (method, scenario, result) => {
  console.log(`${method} -> ${scenario}:`, result);
};

(() => {
  logExample("every", "all numbers positive", sampleNumbers.every((n) => n > 0));
    logExample("every", "all people have 2 scores", samplePeople.every((person) => person.scores.length === 2));
})();

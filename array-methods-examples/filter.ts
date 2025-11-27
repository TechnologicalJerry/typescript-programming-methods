/**
 * filter – keeps elements that satisfy a predicate without mutating the source.
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
  logExample("filter", "keep even numbers", sampleNumbers.filter((n) => n % 2 === 0));
    logExample("filter", "only active people", samplePeople.filter((person) => person.active));
})();

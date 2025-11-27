/**
 * map – transforms every element and returns a brand-new array.
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
  logExample("map", "double numbers", sampleNumbers.map((n) => n * 2));
    logExample("map", "pluck names", samplePeople.map((person) => person.name));
})();

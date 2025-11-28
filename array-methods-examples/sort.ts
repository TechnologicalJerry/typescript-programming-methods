/**
 * sort – orders elements in place; clone first to keep data immutable.
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
  const ascending = [...sampleNumbers].sort((a, b) => a - b);
    logExample("sort", "numbers ascending", ascending);
  
    const byName = [...samplePeople].sort((a, b) => a.name.localeCompare(b.name));
    logExample(
      "sort",
      "people by name",
      byName.map((person) => person.name)
    );
})();

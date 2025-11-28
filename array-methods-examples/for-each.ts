/**
 * forEach – performs side effects on each element (no return value).
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
  const collected: number[] = [];
    sampleNumbers.forEach((n) => collected.push(n * n));
    logExample("forEach", "capture squares", collected);
  
    const names: string[] = [];
    samplePeople.forEach((person, index) => names.push(`${index}:${person.name}`));
    logExample("forEach", "prefix with index", names);
})();

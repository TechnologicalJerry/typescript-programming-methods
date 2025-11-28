/**
 * reduce – accumulates values into a single result.
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
  logExample("reduce", "sum numbers", sampleNumbers.reduce((acc, curr) => acc + curr, 0));
    logExample(
      "reduce",
      "group names into object",
      samplePeople.reduce((acc, person) => ({ ...acc, [person.id]: person.name }), {})
    );
})();

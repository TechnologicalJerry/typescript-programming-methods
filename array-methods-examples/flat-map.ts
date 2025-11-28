/**
 * flatMap – map + flat (depth 1) in one pass.
 */

const sampleWords = ["alpha", "beta", "gamma", "delta"];

const samplePeople = [
  { id: 1, name: "Ada", active: true, scores: [95, 88] },
  { id: 2, name: "Grace", active: false, scores: [70, 82] },
  { id: 3, name: "Linus", active: true, scores: [91, 96] },
];

const logExample = (method: string, scenario: string, result: unknown) => {
  console.log(`${method} -> ${scenario}:`, result);
};

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
